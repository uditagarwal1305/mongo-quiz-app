import React,{useEffect,useState} from "react";
import './Showquiz.css';

export default function Showquiz() {
	/*
	const questions = [
		{
			questionText: 'What is python',
			answerOptions: [
				{ answerText: 'Its age', isCorrect: true },
				{ answerText: 'Its a language', isCorrect: false },
				{ answerText: 'Its nothing', isCorrect: false },
				{ answerText: 'Its a platform', isCorrect: false },
			],
		},
		{
			questionText: 'What is the maximum possible length of an identifier',
			answerOptions: [
				{ answerText: '16', isCorrect: false },
				{ answerText: '32', isCorrect: false },
				{ answerText: '64', isCorrect: false },
				{ answerText: 'None of these above', isCorrect: true },
			],
		},
		{
			questionText: 'Who developed the Python language?',
			answerOptions: [
				{ answerText: 'Zim Den', isCorrect: false },
				{ answerText: 'Guido van Rossum', isCorrect: true },
				{ answerText: 'Niene Stom', isCorrect: false },
				{ answerText: 'Wick van Rossum', isCorrect: false },
			],
		},
		{
			questionText: 'In which year was the Python language developed?',
			answerOptions: [
				{ answerText: '1995', isCorrect: false },
				{ answerText: '1972', isCorrect: false },
				{ answerText: '1981', isCorrect: false },
				{ answerText: '1989', isCorrect: true },
			],
		},
		{
			questionText: 'In which language is Python written?',
			answerOptions: [
				{ answerText: 'English', isCorrect: false },
				{ answerText: 'PHP', isCorrect: false },
				{ answerText: 'C', isCorrect: true },
				{ answerText: 'All of the above', isCorrect: false },
			],
		},
	];
*/
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

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (option) => {
		if (option===quiz[currentQuestion].correctop) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < quiz.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {quiz.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{quiz.length}
						</div>
						<div className='question-text'>{quiz[currentQuestion].question}</div>
					</div>
					<div className='answer-section'>
						{
							<div>
							<button onClick={() => handleAnswerOptionClick(quiz[currentQuestion].option1)}>{quiz[currentQuestion].option1}</button>
							<button onClick={() => handleAnswerOptionClick(quiz[currentQuestion].option2)}>{quiz[currentQuestion].option2}</button>
							<button onClick={() => handleAnswerOptionClick(quiz[currentQuestion].option3)}>{quiz[currentQuestion].option3}</button>
							<button onClick={() => handleAnswerOptionClick(quiz[currentQuestion].option4)}>{quiz[currentQuestion].option4}</button>
							</div>
						}
					</div>
				</>
			)}
		</div>
	);
}
