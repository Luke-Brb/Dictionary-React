import React, { useState } from "react";
import SaveWord from "./components/SaveWord";
import SearchWord from "./components/SearchWord";

export default function App() {
  const [words, setWords] = useState([]);
  const [alertMessage, setAlertMessage] = useState("");

  const handleSaveWord = (currentWord) => {
    setWords([...words, currentWord]);
  };

  const handleCheckWord = (currentWord) => {
    if (words.includes(currentWord)) {
      setAlertMessage(`The word "${currentWord}" is found in the dictionary.`);
      setTimeout(() => {
        setAlertMessage("");
      }, 2000);
    } else {
      setAlertMessage(
        `The word "${currentWord}" is not found in the dictionary.`
      );
      setTimeout(() => {
        setAlertMessage("");
      }, 2000);
    }
  };

  return (
    <>
      <h1>Dictionary</h1>
      <div>
        <SaveWord onSaveWord={handleSaveWord} />
      </div>
      <div>
        <SearchWord onCheckWord={handleCheckWord} />
      </div>
      <div>{alertMessage}</div>
    </>
  );
}
