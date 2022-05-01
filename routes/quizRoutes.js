const express = require("express");
const router= express.Router();
const Quiz= require("../models/quizModel");


router.route("/create").post((req,res) => {
    const question= req.body.question;
    const option1=req.body.option1;
    const option2=req.body.option2;
    const option3=req.body.option3;
    const option4=req.body.option4;
    const correctop=req.body.correctop;
    const newQuiz= new Quiz({
        question,
        option1,
        option2,
        option3,
        option4,
        correctop
    });

    newQuiz.save();

})

router.route("/quiz").get((req,res)=> {
    Quiz.find().then(foundQuiz => res.json(foundQuiz))
})

module.exports= router;
