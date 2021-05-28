import {useEffect, useState} from 'react';
import './App.css';

import Calculator  from './Calculator/Calculator';
import Questions from './Questions/Questions';

const operators = ['+', '-', '*', '/'];

function App() {
  const [questions, setQuestions] = useState([]);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    generateQuestions();
  }, [])

  const generateQuestions = () => {
    let questionsArr = [];
    for(let i = 0; i < 10; i ++){
      questionsArr.push({
        equation: `${getRandInt(1,100)} ${operators[getRandInt(0,operators.length-1)]} ${getRandInt(1, 100)}`,
        answer: "?"
      })
    }
    setPosition(0)
    setQuestions(questionsArr)
  }

  const inputAnswer = (answer) => {
    const newEquationList = [...questions];
    newEquationList[position].answer = answer;
    setQuestions(newEquationList);
    skip();
  }

  const skip = () => {
    if(position === questions.length - 1){
      setPosition(0)
    }
    else{
      setPosition(position + 1)
    }
  }
  
  return (
    <div className="App">
      <Questions 
      questions={questions} 
      position={position}
      skip={skip} 
      generateQuestions={generateQuestions}
      />
      <Calculator inputAnswer={inputAnswer}/>
    </div>
  );
}

function getRandInt(min,max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export default App;
