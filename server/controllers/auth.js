const Student = require("./../db/schema/Student");
const Teacher = require("./../db/schema/Teacher");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");

const maxage = 7 * 24 * 60 * 60;
const createwebToken = (id) => {
  return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: maxage,
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



