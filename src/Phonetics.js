import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetic);
  if (props.phonetics) {
    return (
      <ul className="phonetics">
        {props.phonetics.map(function (phonetic, index) {
          return <li key={index}> {phonetic}</li>;
        })}
      </ul>
    );
  }
}
