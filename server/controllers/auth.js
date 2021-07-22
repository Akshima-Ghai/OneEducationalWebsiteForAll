const Student = require("./../db/schema/Student");
const Teacher = require("./../db/schema/Teacher");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../utills/sendEmail");

const MAX_AGE = 7 * 24 * 60 * 60;
const createwebToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: MAX_AGE,
  });
};

exports.studentSignUp = async (req, res) => {

  let { name, email, password, college, course, year } = req.body;

  try {
    const salt = await bcrypt.genSalt();
    password = await bcrypt.hash(password, salt);
    const created_at = moment().format("MMMM Do YYYY, h:mm:ss a");

    const student = await Student.create({
      name, 
      email, 
      password, 
      college, 
      course, 
      year,
      created_at,
    });

    const token = createwebToken(student._id); 
    return res.status(200).json({ accesstoken: token });
  } 
  catch (err) {
    if (err.code === 11000) {
      return res.status(500).json({ error: "Email already registered" });
    }
    return res.status(500).json({ error: "500 Internal Error" });
  }
};

exports.teacherSignUp = async (req, res) => {

    let { name, email, password, qualification, experience, domain } = req.body;
  
    try {
      const salt = await bcrypt.genSalt();
      password = await bcrypt.hash(password, salt);
      const created_at = moment().format("MMMM Do YYYY, h:mm:ss a");
  
      const teacher = await Teacher.create({
        name, 
        email, 
        password, 
        qualification, 
        experience, 
        domain,
        created_at,
      });
  
      const token = createwebToken(teacher._id);
      return res.status(200).json({ accesstoken: token });
    } 
    catch (err) {
      if (err.code === 11000) {
        return res.status(500).json({ error: "Email already registered" });
      }
      return res.status(500).json({ error: "500 Internal Error" });
    }
};

exports.studentLogin = async (req, res) => {

  const { email, password } = req.body;

  try {
    const student = await Student.findOne({ email: email });
    if (student) {
      const validPassword = await bcrypt.compare(password, student.password);
      if (validPassword) {
        const token = createwebToken(student._id);
        return res.status(200).json({ accesstoken: token });
      } else {
        return res.status(400).json({ error: "Invalid Credentials" });
      }
    } else {
      return res.status(401).json({ error: "Student not found registered with this email" });
    }
  } catch (err) {
    return res.status(500).json({ error: "500 Internal Server Error" });
  }
};

exports.teacherLogin = async (req, res) => {
  
  const { email, password } = req.body;

  try {
    const teacher = await Teacher.findOne({ email: email });
    if (teacher) {
      const validPassword = await bcrypt.compare(password, teacher.password);
      if (validPassword) {
        const token = createwebToken(teacher._id);
        return res.status(200).json({ accesstoken: token });
      } else {
        return res.status(400).json({ error: "Invalid Credentials" });
      }
    } else {
      return res.status(401).json({ error: "Teacher not found registered with this email" });
    }
  } catch (err) {
    return res.status(500).json({ error: "500 Internal Server Error" });
  }
};

exports.studentForgotPassword = async (req, res) =>
{
  const { email } = req.body;
  try
  {
    const student = await Student.findOne({ email: email });
    if (student)
    {
      const id = student._id;
      const token = jwt.sign(
        { id },
        process.env.ACCESS_TOKEN_SECRET_FOREGETPASS,
        { expiresIn: "10m" }
      );

      /* Reset password link will be changed when we deploy client-side , if we are running client-side on local host 
      then link below will be sent as email */

      const link = `${ req.protocol }://${ req.hostname }:3000/reset-password/${ token }`;

      const content = `<h3 style="text-align:center"> Reset your password on LearnZania and continue Learning 👍</h3>
      
      Dear ${ student.name }, please click on following link to reset your password

      <p><a href=${ link }>${ link }</a></p>
      
      Thank you`;

      await sendEmail(
        email,
        "LearnZania - Reset password Now",
        content
      );

      Student.findByIdAndUpdate(
        id,
        { password_reset_token: token },
        { new: true },
        function (err, doc)
        {
          if (err)
          {
            return res.status(500).json({ error: "Student not found with this id" });
          }
        }
      );

      return res.status(200).send({ msg: "Check your mailbox to reset password" });
    } else {
      return res.status(401).json({ error: "Student not found registered with this email" });
    }
  } 
  catch (err) {
    return res.status(500).json({ error: "500 internal error" });
  }
};

exports.teacherForgotPassword = async (req, res) =>
{
  const { email } = req.body;
  try
  {
    const teacher = await Teacher.findOne({ email: email });
    if (teacher)
    {
      const id = teacher._id;
      const token = jwt.sign(
        { id },
        process.env.ACCESS_TOKEN_SECRET_FOREGETPASS,
        { expiresIn: "10m" }
      );

      /* Reset password link will be changed when we deploy client-side , if we are running client-side on local host 
      then link below will be sent as email */

      const link = `${ req.protocol }://${ req.hostname }:3000/reset-password/${ token }`;

      const content = `<h3 style="text-align:center">Reset your password on LearnZania and continue Teaching 👍</h3>
      
      Dear ${ teacher.name }, please click on following link to reset your password

      <p><a href=${ link }>${ link }</a></p>
      
      Thank you`;

      await sendEmail(
        email,
        "LearnZania - Reset password Now",
        content
      );

      Teacher.findByIdAndUpdate(
        id,
        { password_reset_token: token },
        { new: true },
        function (err, doc)
        {
          if (err)
          {
            return res.status(500).json({ error: "Teacher not found with this id" });
          }
        }
      );

      return res.status(200).send({ msg: "Check your mailbox to reset password" });
    } else {
      return res.status(401).json({ error: "Teacher not found registered with this email" });
    }
  } 
  catch (err) {
    return res.status(500).json({ error: "500 internal error" });
  }
};

exports.studentResetPassword = async (req, res) =>
{
  const { token, password } = req.body;
  try
  {
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET_FOREGETPASS,
      async (err, student_tokendata) =>
      {
        if (err)
        {
          return res.status(401).json({ error: "This Link with token has been expired, Please Try again" });
        }
        const { id } = student_tokendata;
        const salt = await bcrypt.genSalt();
        const newpassword = await bcrypt.hash(password, salt);
        Student.findByIdAndUpdate(
          id,
          { password_reset_token: "", password: newpassword },
          { new: true },
          function (err, doc)
          {
            if (err) {
              return res.status(500).json({ error: "Student not found with this id" });
            } else {
              return res.status(200).json({ msg: "Password has been reset successfully" });
            }
          }
        );
      }
    );
  } catch (err) {
    return res.status(500).json({ error: "500 internal error" });
  }
};

exports.teacherResetPassword = async (req, res) =>
{
  const { token, password } = req.body;
  try
  {
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET_FOREGETPASS,
      async (err, teacher_tokendata) =>
      {
        if (err)
        {
          return res.status(401).json({ error: "This Link with token has been expired, Please Try again" });
        }
        const { id } = teacher_tokendata;
        const salt = await bcrypt.genSalt();
        const newpassword = await bcrypt.hash(password, salt);
        Teacher.findByIdAndUpdate(
          id,
          { password_reset_token: "", password: newpassword },
          { new: true },
          function (err, doc)
          {
            if (err)
            {
              return res.status(500).json({ error: "Teacher not found with this id" });
            } else
            {
              return res.status(200).json({ msg: "Password has been reset successfully" });
            }
          }
        );
      }
    );
  } catch (err) {
    return res.status(500).json({ error: "500 internal error" });
  }
};





