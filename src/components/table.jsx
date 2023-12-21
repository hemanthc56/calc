import react, { useEffect, useState } from "react"
import Buttons from "../components/buttons"
import "./table.css"

function Table(){

    var [ques,setQues] = useState("");
    var [ans,setAns] = useState("");
    var [pop,setPop] = useState(false);
    var operands = "+-*/%.";
    var operators = "12345657890"

    useEffect(()=>{
        if(ques.includes('+') || ques.includes('-') || ques.includes('*') || ques.includes('/') || ques.includes('%')){
            try{
                setAns(eval(ques));
            }
            catch(err){setAns("")}
        }
    },[ques])

    function handleValue(val){
        if(ques === "" && (operands.includes(val))){}
        else if(operands.includes(ques.charAt(ques.length - 1)) && operands.includes(val)){}
        else if(ques === "0" && operators.includes(val)){}
        else if(pop === true){
            setPop(false);
            setQues(()=>{
                return (ans+val);
            })
            setAns("")
        }
        else{
            setQues((preval)=>{
                return (preval+val);
            })  
        }
    }
    
    function handleClear(){
        setPop(false);
        setQues("");
        setAns("");
    }

    function handleBackSpace(){
        if(pop === true){
           setPop(false); 
        }
        setQues((preval)=>{
            return preval.slice(0,-1);
        })
    }

    function handleEquals(){
        setPop(!pop);
    }

    return(
        <div className="main-container">
            <div className="output-con">
                <div className="ques-con" style={pop?{fontSize:"25px",color:"rgb(81, 81, 81)"}:{fontSize:"50px"}}>{ques}</div>
                <div className="ans-con" style={pop?{fontSize:"50px"}:{fontSize:"25px",color:"rgb(81, 81, 81)"}}>{ans}</div>
            </div>
            <div className="buttons-con">
                <Buttons  forValue={handleValue} forClear={handleClear} forBackSpace={handleBackSpace} forEquals={handleEquals}/>
            </div>
        </div>
    )
}

export default Table