import React, { useState } from "react";

function SearchWord(props) {
  const [currentWord, setCurrentWord] = useState("");

  const handleCheckWord = () => {
    props.onCheckWord(currentWord);
    setCurrentWord("");
  };

  return (
    <div class="d-flex mb-3 justify-content-center h-100">
      <div class="w-auto mx-auto text-center d-flex">
        <button class="btn btn-primary" onClick={handleCheckWord}>
          Check Word
        </button>
        <input
          type="text"
          class="form-control"
          value={currentWord}
          placeholder="if it is found"
          onChange={(e) => setCurrentWord(e.target.value)}
        />
      </div>
    </div>
  );
}
export default SearchWord;
