const Student = require("./../db/schema/Student");
const Teacher = require("./../db/schema/Teacher");
const bcrypt = require("bcrypt");
const moment = require("moment");
const jwt = require("jsonwebtoken");

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
      if (err.code === 11000) {console.log("email already registered");
        return res.status(500).json({ error: "Email already registered" });
      }
      return res.status(500).json({ error: "500 Internal Error" });
    }
};



