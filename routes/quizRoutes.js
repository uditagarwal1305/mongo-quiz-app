const express = require("express");
const router= express.Router();
const Quiz= require("../models/quizModel");
        
/*
function parse(){
const parser = new xml2js.Parser();

 	parser.parseString(

		`<email>

		<to>Test</to>

		<from>Test1</from>

		<heading>Test email</heading>

		<body>Email regards to xml data parsing in React</body>

		</email>`,
       
		function(err, result) {

			 console.log(result);

		}
        
	);
    console.log(result);
    return result
}
	//return <div>Parse XML using ReactJs</div>;
*/

router.route("/create").post((req,res) => {
    const question=req.body.question; 
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
/*
router.route("/quiz").get((req,res)=> {
    Quiz.find().then(foundQuiz => res.json(foundQuiz))
})

router.route("/quiz").get((req,res)=> {
    
    Quiz.findOne({ option1: req.body.option1}).then(foundQuiz => res.json(foundQuiz))
})
*/
router.route("/quiz").get(async (req,res)=> {
    const option=req.query.option1;
    try {
        let quiz1;
        if(option){
            quiz1= await Quiz.findOne({ option1 : option });
        }
        else{
            quiz1= await Quiz.find();
        }
        res.status(200).json(quiz1);
    } catch (error) {
        res.status(500).json(error);
    }
    
});

//GET POST
router.route("/quiz/:id").get(async (req,res)=> {
    try {
      const post = await Quiz.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports= router;
