import React, { useState } from "react";
import "./Dictonary.css";
import axios from "axios";

export default function Dictonary() {
  let [keyword, setKeyword] = useState("");
  function handleResponse(response) {
    console.log(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`);
    let apiKey = "79e2b848de54da3deo0aafeff8t7fa08";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictonary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="type a word"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="search" />
      </form>
    </div>
  );
}
