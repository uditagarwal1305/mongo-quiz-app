const mongoose= require("mongoose");

const quizSchema={
    question: String,
    option1: String,
    option2: String,
    option3: String,
    option4: String,
    correctop: String
}

const Quiz= mongoose.model("Quiz", quizSchema);

module.exports=Quiz;
