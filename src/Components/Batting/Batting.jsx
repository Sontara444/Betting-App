import React, { useState } from "react";
import "./Batting.css";

function Batting() {
  const [num, setNum] = useState(0);
  const [selectInput, setSelectInput] = useState('')
  const [score, setScore] = useState(5000);
  const [amount, setAmount] = useState(100);
  
  const handleGetSelect =(e)=>{
    e.preventDefault()
    const value = Number(e.target.value)
    setAmount(value)
  }
  

const handleChange = (value)=>{
  setSelectInput(value);
}

  const handleRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    setNum(randomNum);

    let newScore = score;

    if(selectInput === "option1"){
      if(randomNum < 5){
        newScore = newScore + amount
      }else{
        newScore = newScore - amount
      }
    }

    if(selectInput === "option2"){
      if(newScore === 5){
          newScore = newScore + (amount*5)
      }
      else{
        newScore = newScore - amount
      }
    }

      if(selectInput === "option3"){
        if(newScore > 5){
          newScore = newScore - amount
        }
        else{
          newScore = newScore + 1
        }
      }
    setScore(newScore)
 

  }

  return (
    <>
      <div className="batting">
        <div className="batting-container">
          <div className="batting-top">
            <div className="batting-profile">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXM6R_l7ZJjSOH7g8oYqg97ftNDgRe9VncfQ&s"
                alt=""
              />
            </div>
            <div className="batting-amount">
              <h2>{score}</h2>
            </div>
          </div>
          <div className="batting-middle">
            <h2>{num}</h2>
            <button type="button" onClick={handleRandomNum}>
              PLAY
            </button>
          </div>
          <div className="batting-bottom">
            <div className="batting-selector">
              <label htmlFor="option1"> Less than 5
              <input type="radio" id="option1" value="option1" 
              checked={selectInput === "option1"}
              onChange={()=>handleChange("option1")} />
              </label>
            </div>
            <div className="batting-selector">
              <label htmlFor="option2"> Equal to 5
              <input type="radio" id="option2" value="option2" checked={selectInput === "option2"} onChange={()=>handleChange("option2")}/>
              </label>
            </div>
            <div className="batting-selector">
              <label htmlFor="option3"> Greater than 5
              <input type="radio" id="option3" value="option3"
              checked={selectInput === "option3"} 
              onChange={()=>handleChange("option3")}/>
              </label>
            </div>
          </div>

          <div className="batting-amount-container">
            <h1>Amount</h1>
            <select name="amount" id="amount" value={amount} onChange={handleGetSelect}>
              <option value="100">100</option>
              <option value="200">200</option>
              <option value="500">500</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Batting
