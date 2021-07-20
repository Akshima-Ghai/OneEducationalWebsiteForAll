const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  created_at: {
    type: String,
    required: true,
  },
  my_queries:[
    {
      title:String,
      description:String
    }
  ],
  quiz_record:[
    {
      quiz_title:String,
      quiz_marks:Number,
      quiz_total:Number,
      quiz_percent:Number,
    }
  ]
});

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
