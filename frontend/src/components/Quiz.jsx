
import React,{useEffect,useState} from "react";


function Quiz() {

    const [quiz,setQuiz]= useState([{
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctop: ''
    }])

    useEffect(() => {
        fetch("/quiz").then(res => {
            if(res.ok){
                
                return res.json()
            }
        }).then(jsonRes => setQuiz(jsonRes));
    })

    return <div className="container">
        <h1>Quiz</h1>

        {quiz.map(quiz =>
        <div>
        <h1>{quiz.question}</h1>
        <h4>{quiz.option1}</h4>
        <h4>{quiz.option2}</h4>
        <h4>{quiz.option3}</h4>
        <h4>{quiz.option4}</h4>
        
        </div>
            )}
    </div>
}

export default Quiz;