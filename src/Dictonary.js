import React, { useState } from "react";
import "./Dictonary.css";
export default function Dictonary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`);
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
