import React from "react";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [price, setPrice] = useState(0);
  const [amount, setAmount] = useState(0);
  const [fiveH, setFiveH] = useState("0");
  const [twoH, setTwoH] = useState("0");
  const [oneH, setOneH] = useState("0");
  const [fifty, setFifty] = useState("0");
  const [twenty, setTwenty] = useState("0");
  const [ten, setTen] = useState("0");
  const [five, setFive] = useState("0");
  const [two, setTwo] = useState("0");
  const [one, setOne] = useState("0");
  const [returnZero, setReturnZero] = useState("");
  let returnAmount = amount - price;

  const returnHandler = () => {
    console.log(price);
    console.log(amount);
    console.log(returnAmount);
    if (returnAmount === 0) {
      setReturnZero("All payments are complete.");
    } else if (returnAmount > 0) {
      const five00 = Math.floor(returnAmount / 500);
      console.log(fiveH);
      returnAmount -= five00 * 500;
      setFiveH(five00);
      // console.log(returnAmount);

      const two00 = Math.floor(returnAmount / 200);
      returnAmount -= two00 * 200;
      setTwoH(two00);
      // console.log(returnAmount);

      const one00 = Math.floor(returnAmount / 100);
      returnAmount -= one00 * 100;
      setOneH(one00);
      // console.log(returnAmount);

      const fifty50 = Math.floor(returnAmount / 50);
      returnAmount -= fifty50 * 50;
      setFifty(fifty50);
      // console.log(returnAmount);

      const twenty20 = Math.floor(returnAmount / 20);
      returnAmount -= twenty20 * 20;
      setTwenty(twenty20);
      // console.log(returnAmount);

      const ten10 = Math.floor(returnAmount / 10);
      returnAmount -= ten10 * 10;
      setTen(ten10);
      // console.log(returnAmount);

      const five5 = Math.floor(returnAmount / 5);
      returnAmount -= five5 * 5;
      setFive(five5);
      // console.log(returnAmount);

      const two2 = Math.floor(returnAmount / 2);
      setTwo(two2);
      returnAmount -= two2 * 2;
      // console.log(returnAmount);

      const one1 = Math.floor(returnAmount / 1);
      setOne(one1);
      returnAmount -= one1 * 2;
      // console.log(returnAmount);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Cash Register</h1>
        <h2>Easily return the amount...</h2>
      </header>
      <p>
        <input
          placeholder="Enter Price"
          onChange={(event) => {
            setPrice(parseInt(event.target.value));
          }}
        />
      </p>
      <p>
        <input
          placeholder="Enter Deposit"
          onChange={(event) => {
            setAmount(parseInt(event.target.value));
          }}
        />
      </p>
      <button onClick={returnHandler}>Check</button>
      <p className="returnAmount">Return Amount: {returnAmount}</p>
      <p>{returnZero}</p>
      <div className="allDenoBtns">
        <div className="denominationsAndNo">
          <div className="denomination">₹500 </div>
          <div className="noOfNotes"> {fiveH}</div>
        </div>
        <br />
        <div className="denominationsAndNo">
          <div className="denomination">₹200 </div>
          <div className="noOfNotes"> {twoH}</div>
        </div>
        <br />
        <div className="denominationsAndNo">
          <div className="denomination">₹100 </div>
          <div className="noOfNotes"> {oneH}</div>
        </div>
        <br />
        <div className="denominationsAndNo">
          <div className="denomination">₹50 </div>
          <div className="noOfNotes"> {fifty}</div>
        </div>
        <br />
        <div className="denominationsAndNo">
          <div className="denomination">₹20 </div>
          <div className="noOfNotes"> {twenty}</div>
        </div>
        <br />
        <div className="denominationsAndNo">
          <div className="denomination">₹10 </div>
          <div className="noOfNotes"> {ten}</div>
        </div>
        <br />
        <div className="denominationsAndNo">
          <div className="denomination">₹05 </div>
          <div className="noOfNotes"> {five}</div>
        </div>
        <br />
        <div className="denominationsAndNo">
          <div className="denomination">₹02 </div>
          <div className="noOfNotes"> {two}</div>
        </div>
        <br />
        <div className="denominationsAndNo">
          <div className="denomination">₹01 </div>
          <div className="noOfNotes"> {one}</div>
        </div>
      </div>
      <div class="tweet-game">
        <a target="_blank" href="https://hrefshare.com/6a604">
          <i class="fa fa-twitter"></i> Tweet it!
        </a>
      </div>
      <footer>
        Made by{" "}
        <a target="_blank" href="https://devpriyanshu.netlify.app">
          Priyanshu
        </a>
        .
      </footer>
    </div>
  );
}
