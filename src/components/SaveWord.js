import React, { useState } from "react";

function SaveWord(props) {
  const [currentWord, setCurrentWord] = useState("");

  const handleInputWord = (event) => {
    setCurrentWord(event.target.value);
  };

  const handleSaveWord = () => {
    props.onSaveWord(currentWord);
    setCurrentWord("");
  };

  return (
    <>
      <button onClick={handleSaveWord}>Save Word</button>
      <input
        type="text"
        value={currentWord}
        placeholder="in the dictionary"
        onChange={handleInputWord}
      />
    </>
  );
}
export default SaveWord;
