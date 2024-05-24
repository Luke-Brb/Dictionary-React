import React, { useState } from "react";

function SearchWord(props) {
  const [currentWord, setCurrentWord] = useState("");

  const handleCheckWord = () => {
    props.onCheckWord(currentWord);
    setCurrentWord("");
  };
  return (
    <>
      <button onClick={handleCheckWord}>Check Word</button>
      <input
        type="text"
        value={currentWord}
        placeholder="if it exists in the dictionary"
        onChange={(e) => setCurrentWord(e.target.value)}
      />
    </>
  );
}
export default SearchWord;
