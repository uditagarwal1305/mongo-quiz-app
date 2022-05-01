import React, {useState} from "react";
import axios from "axios";

function CreateQuiz() {
    const [input,setInput]=useState({
        question: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        correctop: ''
       
    })

function handleChange(event){
    const {name,value}=event.target;

    setInput(preInput => {
        return{
            ...preInput,
            [name]: value

        }
    })

}

function handleClick(event){
    event.preventDefault();
    const newQuiz= {
        question: input.question,
        option1: input.option1,
        option2: input.option2,
        option3: input.option3,
        option4: input.option4,
        correctop: input.correctop
    }
    axios.post("http://localhost:3001/create", newQuiz)
}

    return <div className="container">
        <h1>Create Quiz</h1>
        <form >
            <div className="form-group">
                <textarea onChange={handleChange} name="question" value={input.question} autoComplete="off" className="form-control" placeholder="Enter Question"></textarea>
            </div>
            <br></br>

            <div className="form-group">
                <input onChange={handleChange} name="option1" value={input.option1} autoComplete="off" className="form-control" placeholder="Option 1"></input>
            </div>

            <br></br>

            <div className="form-group">
                <input onChange={handleChange} name="option2" value={input.option2} autoComplete="off" className="form-control" placeholder="Option 2"></input>
            </div>

            <br></br>

            <div className="form-group">
                <input onChange={handleChange} name="option3" value={input.option3} autoComplete="off" className="form-control" placeholder="Option 3"></input>
            </div>

            <br></br>

            <div className="form-group">
                <input onChange={handleChange} name="option4" value={input.option4} autoComplete="off" className="form-control" placeholder="Option 4"></input>
            </div>

            <br></br>

            <div className="form-group">
                <input onChange={handleChange} name="correctop" value={input.correctop} autoComplete="off" className="form-control" placeholder="Correct Option"></input>
            </div>

            <br></br>

            <button onClick={handleClick} className="btn btn-lg btn-info"> Add Question </button>
            
        </form>
    </div>
}

export default CreateQuiz;