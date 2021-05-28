import './Equation.css'

const Equation = ({
  index, 
  position, 
  equation, 
  answer
}) => {
  const select = index === position ? 'selected ' : '';

  // Sets the class of the equation depending on answer
  const determineAnswer = () => {
    let className = ""
    if(answer !== "?"){
      className = (Number(answer) === eval(equation)) ? "correct " : "incorrect "
      return className
    }
    return ""
  }

  return ( 
    <div className={`${select}${determineAnswer()}equation`} data-testid="equationBody">
        <b>{select === 'selected ' ? '> ' : ''} {equation} = {answer}</b>
    </div>
   );
}
 
export default Equation;