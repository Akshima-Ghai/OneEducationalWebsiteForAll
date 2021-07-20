const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  numberOfQuestion: {
    type: Number,
    require: true
  },
  questions: [{
    question: String,
    options:[String],
    answers:String,
  }],
  creator:{
    tid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"teacher"
    }
  }
});

const Quiz = mongoose.model("quizzes", quizSchema);
module.exports = Quiz;
