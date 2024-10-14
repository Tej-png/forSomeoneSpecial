import React, { useState } from "react";
import "../App.css";
import notes from "../assets/script.js";

function Page1(props) {

  
  function HandleYesorNo() {
    console.log("clciked yes")
    if (props.clickYes) {
      return  <>
      <props.TextAnimation text={"Wait, you said YES???? or wait did you just click yes to see what happens lol,  I hope you said YES for real If so then damnnn where we goinggg?"} audioSrc={props.audioFile}></props.TextAnimation>
     
     
    </>
    } else {
      return   <props.TextAnimation text={"oh I see, it's fine I'm not sadd or anything hahaha see even my shirt says I'm so happy hahaha not because you said no lol means I'm not sad hahaha anywayyy you can listen to this music if you wanna it's literaly 40 mins long"} audioSrc={props.audioFile}></props.TextAnimation>
    }
  }

  return (
    <div className="textArea">
      {props.YesOrNo && <HandleYesorNo></HandleYesorNo> }
      {notes
        .filter((item) => item.id === props.count)
        .map((item) => (
          <>
            <props.TextAnimation text={item.note} audioSrc={props.audioFile}></props.TextAnimation>
          </>
        ))}
    </div>
  );
}

export default Page1;
