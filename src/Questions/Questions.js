import './Questions.css'

import Equation from "./Equation/Equation";


const Questions = ({
  questions, 
  position, 
  skip, 
  generateQuestions
}) => {
  return ( 
    <div className="flexItem">
      <h1>Questions</h1>
      {questions.map((e, i) => 
        <Equation 
          key={i}
          index={i}
          position={position}
          equation={e.equation} 
          answer={e.answer}
        />
      )}
      <div className="buttonBar">
        <button id="skipButton" 
        className="buttonBarButton" 
        onClick={()=>skip()}>
            Next
        </button>
        <button id="newQuestionsButton" 
        className="buttonBarButton"
        onClick={()=>generateQuestions()}
        >
          New List
        </button>
      </div>
    </div>
   );
}
 
export default Questions;