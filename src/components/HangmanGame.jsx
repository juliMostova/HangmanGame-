import React, { useEffect, useState } from "react";
import randomWordList from "./RandomWordList";
import "./HangmanGameStyle.css";

import img0 from "../images/0.png";
import img1 from "../images/1.png";
import img2 from "../images/2.png";
import img3 from "../images/3.png";
import img4 from "../images/4.png";
import img5 from "../images/5.png";
import img6 from "../images/6.png";

function HangmanGame({
  maxLength = 6,
  images = [img0, img1, img2, img3, img4, img5, img6],
}) {
  const [wrongStep, setWrongStep] = useState(0);
  const [guessedWord, setGuessedWord] = useState(new Set());
  const [group, setGroup] = useState("animals");
  const [ranWord, setRanWord] = useState(randomWordList() || "");


  const resetGame = () => {
    setWrongStep(0);
    setGuessedWord(new Set());
    setRanWord(randomWordList()|| "");
    setGroup("animals");
  };

  const handleGuess = (e) => {
    let value = e.target.value;
    const udateSet = new Set([...guessedWord, value]);
    setGuessedWord(udateSet);
   if(!ranWord.includes(value)){
    setWrongStep(wrongStep+1);
   }
  };
  const generateBattons = () => {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter, ind) => (
      <button
        key={ind}
        value={letter}
        disabled={guessedWord.has(letter) || wrongStep>= maxLength}
        onClick={handleGuess}
      >
        {letter}
      </button>
    ));
  };



  const randomWords = () => {

    const result = ranWord
    .split("")
    .map((ltr) => (guessedWord.has(ltr) ? ltr : "_"));
    console.log('Random Words Result:',result,'randomword',ranWord);
    return result;
  };


  const selectChange = (e) => {
    const { value } = e.target;
    setGroup(value);
    setRanWord(randomWordList(value)||"");
    setGuessedWord(new Set());
    setWrongStep(0);
  };

  
  let alt = `${maxLength}/${wrongStep}`;
  let isOver = wrongStep >= maxLength;
let isWinner = randomWords().join("") === ranWord;


  return (
    <div className="Hangman">
      <h1 className="title">Hangman Game : {group}</h1>
      <div className="flex-container">
      
        <div className="Hangman-counter">
          <img src={images[wrongStep]} alt={alt} />
          <p>Guessed Wrong :{wrongStep}</p>
        </div>
        <div>
          <p className="Hangman-word">
          {isOver?ranWord:randomWords()}
        
            </p>
          
          <div className="btns">{generateBattons()}</div>
  
        </div>
        <div className="Hangman-reset">
          <button id="btnReset" onClick={resetGame}>
            Reset?
          </button>
          <form>
            <label htmlFor="group">Guess About:</label>
            <select name="group" value={group} onChange={selectChange}>
              <option value="animals">Animals</option>
              <option value="colors">Colors</option>
              <option value="countries">Countries</option>
            </select>
          </form>
        </div>
      </div>
      
       {isOver && !isWinner &&<p className="winner">You lost,try again!😭</p>}
    {isWinner && <p  className="winner">Congrats!You won!🎉</p>} 
    </div>
  );
}

export default HangmanGame;
