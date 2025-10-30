import React from "react";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3> {props.meaning.partOfSpeech}</h3>
      <Phonetics phonetics={props.meaning.phonetic} />
      <p>{props.meaning.definition}</p>
      <p>{props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
