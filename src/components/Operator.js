import React from "react";

function Operator() {
    let marks = 100;
  return (
    <div className="operator">
      <div>
        <h1>Operators</h1>
        <button type="button"
        onClick={() => {
            marks++;
            console.log(marks);
          }}>Increment</button>

        <button type="button"
        onClick={() => {
            marks--;
            console.log(marks);
          }}> Decrement</button>

        <button type="button"
        onClick={() => {
            let a = (34*567)*34/89-98+457;
            console.log(a);
          }}>Precedence</button>

        <button type="button"
        onClick={() => {
            let a = 150;
            a += 80;
            a -= 90;
            a *= 100;
            a /= 110;
            a %= 120;

            console.log(a)
          }}>Assignment Operator</button>

        <button type="button"
        onClick={() => {
            let a = 100;
            console.log(a == 130)
            console.log(a != 140)
            console.log(a < 150)
            console.log(a > 160)
            console.log(a <= 170)
            console.log(a >= 180)
          }}
        > Comparision Operator</button>
        <button type="button"
        onClick={() => {
            let a = 890;
            if (a >= 900) {
              console.log("value of a is correct");
            } else {
              console.log("value of a is incorrect");
            }
          }}>if else
        </button>
      </div>
    </div>
  );
}

export default Operator;