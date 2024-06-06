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
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid justify-content-center">
          <h1 class="navbar-brand mb-2 fs-2">
            <strong>Dictionary</strong>
          </h1>
        </div>
      </nav>
      <div class="d-flex align-items-center justify-content-center h-100">
        <div class="container rounded w-25 border border-3 border-dark bg-warning text-dark mx-auto mt-5">
          <div class="mt-3">
            <SaveWord onSaveWord={handleSaveWord} />
            <SearchWord onCheckWord={handleCheckWord} />
            <p class="text-center">{alertMessage}</p>
          </div>
        </div>
      </div>
    </>
  );
}
