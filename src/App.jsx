import { useState, useEffect, useRef } from "react";
import "./App.css";
import Page1 from "./pages/page1";
import LastPage from "./pages/lastPage";

const TextAnimation = ({ text, audioSrc }) => {
  const [displayedText, setDisplayedText] = useState(""); // Track displayed text
  const [index, setIndex] = useState(0); // Track current index of the letter
  const audioRef = useRef(null); // Reference to audio element

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1)); // Update displayed text
        setIndex(index + 1); // Move to the next letter
      }, 50); // Adjust typing speed here

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

 useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, index + 1)); // Update displayed text
        setIndex(index + 1); // Move to the next letter
      }, 100); // Adjust typing speed here

      return () => clearTimeout(timeout);
    } else {
      // Stop the audio playback when the text ends
      if (audioRef.current) {
        audioRef.current.pause(); // Pause the audio
        audioRef.current.currentTime = 0; // Reset the audio to the beginning
      }
    }
  }, [index, text]);

  useEffect(() => {
    // Reset index and displayed text when the text prop changes
    setDisplayedText('');
    setIndex(0);

    // Play the audio when a new text starts to animate
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Audio playback failed:", error);
      });
    }
  }, [text, audioSrc]); // Include audioSrc to play new audio if it changes
  return (
    <div>
      <p>{displayedText}</p>
      <audio ref={audioRef} src={audioSrc} />
    </div>
  );
};

function App() {
  const [photoCount, setPhotoCount] = useState(1);
  const [clickYes, setClickYes] = useState(false);
  const [click, setClick] = useState(true);
  const [count, setCount] = useState(0);
  const [YesOrNo, setYesOrNo] = useState(false);
  const music = new Audio("./src/assets/bg-music.mp3");
  let textAudio = new Audio("./src/assets/MouseClick.mp3");
  const audioFile = "./src/assets/text2.mp3";

  function handleClick() {
    console.log("yess");
    setYesOrNo(true);
  }

  function handleMusic() {
    setCount(count + 1);
    setPhotoCount(photoCount + 1);
    textAudio.play();

    if (click) {
      // Ensure music plays only if 'click' is true
      setClick(false);
      music.play();
    }
  }

  return (
    <div className="main" onClick={handleMusic}>
      {count >= 7 && clickYes == false ? (
        <img className="my-img" src={"./src/assets/photos/rejection.JPG"}></img>
      ) : (
        <img
          className="my-img"
          src={"./src/assets/photos/" + photoCount + ".JPG"}
        ></img>
      )}

      {count >= 6 && (
        <LastPage setClickYes={setClickYes} handleClick={handleClick} />
      )}

      {click ? (
        <div className="welcome">
          <h1>Greetings! Simron.</h1>
          <p>Press the screen.</p>
        </div>
      ) : (
        <Page1
          count={count}
          clickYes={clickYes}
          handleClick={handleClick}
          YesOrNo={YesOrNo}
          setYesOrNo={setYesOrNo}
          TextAnimation={TextAnimation}
          audioFile={audioFile}
        />
      )}
    </div>
  );
}

export default App;
