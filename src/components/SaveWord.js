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
    <div class="d-flex justify-content-center mb-3">
      <div class="w-auto mx-auto text-center d-flex">
        <button class="btn btn-primary" onClick={handleSaveWord}>
          Save Word
        </button>
        <input
          type="text"
          class="form-control"
          value={currentWord}
          placeholder="in the dictionary"
          onChange={handleInputWord}
        />
      </div>
    </div>
  );
}
export default SaveWord;
