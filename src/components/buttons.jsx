import react, { useState } from "react"
import "./buttons.css"

function Buttons(props){

    var [addDot , setAddDot] = useState(false);
    var operands = "+-*/%"

    function handleclick(event){
        if(operands.includes(event.target.innerHTML)){
            setAddDot(false)
        }
        if(event.target.innerHTML === 'C'){
            props.forClear();
        }
        else if(event.target.innerHTML === 'B'){
            props.forBackSpace();
        }
        else if(event.target.innerHTML === '='){
            props.forEquals();
        }   
        else{  
            if(event.target.innerHTML !== '.'){
                props.forValue(event.target.innerHTML)
            }
            else{
                if(addDot === false){
                props.forValue(event.target.innerHTML);
                setAddDot(true);
            }
            } 
        }
    }

    return(
        <div className="buttons_container">
            <button onClick={handleclick} className="btn">C</button>
            <button onClick={handleclick} className="btn">%</button>
            <button onClick={handleclick} className="btn">B</button>
            <button onClick={handleclick} className="btn">/</button>
            <button onClick={handleclick} className="btn">7</button>
            <button onClick={handleclick} className="btn">8</button>
            <button onClick={handleclick} className="btn">9</button>
            <button onClick={handleclick} className="btn">*</button>
            <button onClick={handleclick} className="btn">4</button>
            <button onClick={handleclick} className="btn">5</button>
            <button onClick={handleclick} className="btn">6</button>
            <button onClick={handleclick} className="btn">-</button>
            <button onClick={handleclick} className="btn">1</button>
            <button onClick={handleclick} className="btn">2</button>
            <button onClick={handleclick} className="btn">3</button>
            <button onClick={handleclick} className="btn">+</button>
            <button onClick={handleclick} className="btn">00</button>
            <button onClick={handleclick} className="btn">0</button>
            <button onClick={handleclick} className="btn">.</button>
            <button onClick={handleclick} className="btn">=</button>
        </div>
    )
}

export default Buttons