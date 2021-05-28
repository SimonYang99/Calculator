import { useState } from 'react';
import './Calculator.css';

const Calculator = ({inputAnswer}) => {
  const [calcView, setCalcView] = useState("");

  const submitAns = () => {
    if(isNaN(calcView) === true || calcView.length === 0){
      setCalcView("ERROR");
    }
    else {
      inputAnswer(calcView);
      setCalcView("");
    }
  }

  const evaluateEquation = () => {
    try{
      setCalcView(eval(calcView));
    }
    catch{
      setCalcView("ERROR")
    }
  }

  return ( 
    <div className="flexItem" id="calcBody">
      <form id="calc">
        <table className="calcTable">
          <tbody>
            <tr>
              <td>
                <input 
                  type="text" 
                  name="input" 
                  size="16" 
                  id="answer" 
                  value={calcView}
                  onChange={(e)=>{
                    setCalcView(e.target.value);
                  }}
                  onKeyPress={e=>{
                    if(e.key === "Enter"){
                      e.preventDefault(); 
                      evaluateEquation();
                    }

                  }}
                  data-testid="calcView"
                  
                  />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" className="calcButton" name="one" value="1" onClick={()=>{setCalcView(calcView + '1')}} />
                <input type="button" className="calcButton" name="two" value="2" onClick={()=>{setCalcView(calcView + '2')}} />
                <input type="button" className="calcButton" name="three" value="3" onClick={()=>{setCalcView(calcView + '3')}} />
                <input type="button" className="calcButton" name="plus" value="+" onClick={()=>{setCalcView(calcView + '+')}} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" className="calcButton" name="four" value="4" onClick={()=>{setCalcView(calcView + '4')}} />
                <input type="button" className="calcButton" name="five" value="5" onClick={()=>{setCalcView(calcView + '5')}} />
                <input type="button" className="calcButton" name="six" value="6" onClick={()=>{setCalcView(calcView + '6')}} />
                <input type="button" className="calcButton" name="minus" value="-" onClick={()=>{setCalcView(calcView + '-')}} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" className="calcButton" name="seven" value="7" onClick={()=>{setCalcView(calcView + '7')}} />
                <input type="button" className="calcButton" name="eight" value="8" onClick={()=>{setCalcView(calcView + '8')}} />
                <input type="button" className="calcButton" name="nine" value="9" onClick={()=>{setCalcView(calcView + '9')}} />
                <input type="button" className="calcButton" name="multiply" value="*" onClick={()=>{setCalcView(calcView + '*')}} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" className="calcButton" name="clear" value="C" onClick={()=>{setCalcView('')}}/>
                <input type="button" className="calcButton" name="zero" value="0" onClick={()=>{setCalcView(calcView + '0')}} />
                <input type="button" className="calcButton" name="equal" value="=" onClick={()=>{evaluateEquation()}} />
                <input type="button" className="calcButton" name="devide" value="/" onClick={()=>{setCalcView(calcView + '/')}} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="button" id="submitButton" name="sumbit" value="< Submit" onClick={()=>submitAns()} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
   );
}
 
export default Calculator;