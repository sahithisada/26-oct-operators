import React, { useRef } from 'react'

function Operators() {
    let firstNameInputRef=useRef();
    let lastNameInputRef=useRef();
    let telInputRef=useRef();
    let hinInputRef=useRef();
    let engInputRef=useRef();
    let mathInputRef=useRef();
    let sciInputRef=useRef();
    let socInputRef=useRef();


    let telSpanRef=useRef();
    let hinSpanRef=useRef();
    let engSpanRef=useRef();
    let mathSpanRef=useRef();
    let sciSpanRef=useRef();
    let socSpanRef=useRef();


    let resultPara=useRef();
  return (
    <div>
        <h1>Student MarkList</h1>
      <form>
        <div>
            <label>First Name</label>
                <input ref={firstNameInputRef}  placeholder='Enter Last Name'></input>
            <span></span>
        </div>
        <div>
            <label>Last Name</label>
            <input ref={lastNameInputRef} placeholder='Enter Last Name'></input>
            <span></span>
        </div>
        <div>
            <label>Telugu</label>
            <input type='number' ref={telInputRef}  placeholder='Enter Your Marks' 
            onFocus={
                ()=>{
                    telInputRef.current.style.backgroundColor="#c0e6c0";
                }
            }
            onChange={()=>{
                let telMarks=Number(telInputRef.current.value);
                if(telMarks>=35){
                    telSpanRef.current.innerHTML="Pass";
                    telSpanRef.current.style.color="green";
                }else{
                    telSpanRef.current.innerHTML="Fail";
                    telSpanRef.current.style.color="red";
                }
            }}
            onBlur={()=>{
                telInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={telSpanRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' ref={hinInputRef} placeholder='Enter Your Marks' 
            onFocus={()=>{
                hinInputRef.current.style.backgroundColor="#c0e6c0";
            }}
            onChange={()=>{
                let hinMarks=Number(hinInputRef.current.value);
               if(hinMarks>=35){
                    hinSpanRef.current.innerHTML="Pass";
                    hinSpanRef.current.style.color="green"
                }else{
                    hinSpanRef.current.innerHTML="Fail";
                    hinSpanRef.current.style.color="red"
                }

            }}
            onBlur={()=>{
                hinInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={hinSpanRef}></span>
        </div>
        <div>
            <label>English</label>
            <input type='number' ref={engInputRef} placeholder='Enter Your Marks'
            onFocus={()=>{
                engInputRef.current.style.backgroundColor="#c0e6c0";
            }}
            onChange={()=>{
                let engMarks=Number(engInputRef.current.value);
              if(engMarks>=35){
                    engSpanRef.current.innerHTML="Pass";
                    engSpanRef.current.style.color="green"
                }
                else{
                    engSpanRef.current.innerHTML="Fail"
                    engSpanRef.current.style.color="red"
                }
            }}
            onBlur={()=>{
                engInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={engSpanRef}></span>
        </div>
        <div>
            <label>Mathematics</label>
            <input type='number' ref={mathInputRef}placeholder='Enter Your Marks'
            onFocus={()=>{
                mathInputRef.current.style.backgroundColor="#c0e6c0";
            }}
            onChange={()=>{
                let mathMarks=Number(mathInputRef.current.value);
                if(mathMarks>=35){
                    mathSpanRef.current.innerHTML="Pass";
                    mathSpanRef.current.style.color="green";
                }
                else{
                    mathSpanRef.current.innerHTML="Fail";
                    mathSpanRef.current.style.color="red";
                }
            }}
            onBlur={()=>{
                mathInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={mathSpanRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='number' ref={sciInputRef} placeholder='Enter Your Marks'
            onFocus={()=>{
                sciInputRef.current.style.backgroundColor="#c0e6c0";
            }}
            onChange={()=>{
                let sciMarks=Number(sciInputRef.current.value);
              if(sciMarks>=35){
                    sciSpanRef.current.innerHTML="Pass";
                    sciSpanRef.current.style.color="green";
                }
                else{
                    sciSpanRef.current.innerHTML="Fail";
                    sciSpanRef.current.style.color="red";
                }
            }}
            onBlur={()=>{
                sciInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={sciSpanRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='number' ref={socInputRef} placeholder='Enter Your Marks'
            onFocus={()=>{
                socInputRef.current.style.backgroundColor="#c0e6c0";
            }}
            onChange={()=>{
                let socMarks=Number(socInputRef.current.value);
               if(socMarks>=35){
                    socSpanRef.current.innerHTML="Pass";
                    socSpanRef.current.style.color="green"
                }
                else{
                    socSpanRef.current.innerHTML="Fail";
                    socSpanRef.current.style.color="red";
                }
            }}
            onBlur={()=>{
                socInputRef.current.style.backgroundColor="";
            }}
            ></input>
            <span ref={socSpanRef}></span>
        </div>

        <div>
            <button type='button' onClick={()=>{
                let firstName=firstNameInputRef.current.value;
                let lastName=lastNameInputRef.current.value;
                let telMarks=Number(telInputRef.current.value);
                let hinMarks=Number(hinInputRef.current.value);
                let engMarks=Number(engInputRef.current.value);
                let mathMarks=Number(mathInputRef.current.value);
                let sciMarks=Number(sciInputRef.current.value);
                let socMarks=Number(socInputRef.current.value);

                let totalMarks=telMarks+hinMarks+engMarks+mathMarks+sciMarks+socMarks;

                let totalParc=(totalMarks/600)*100;

                alert(`${firstName} ${lastName} has scored ${totalMarks}Marks and percentage of ${totalParc.toFixed(2)}%`);

                resultPara.current.innerHTML=
                `${firstName} ${lastName} has scored ${totalMarks}Marks and percentage of ${totalParc.toFixed(2)}%`;

            }}>Result</button>
        </div>
        <p ref={resultPara}></p>
      </form>
    </div>
  )
}

export default Operators