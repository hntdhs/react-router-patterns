import React from "react";
import { Link, Redirect } from "react-router-dom";

function DogInfo({dog}) {
    if (!dog) return <Redirect to="/dogs"/>

    return (
        <div>
            <h1>{dog.name} is {dog.age} years old</h1>
            <ul>
            {dog.facts.map((fact, i) => (
            <li key={i}>{fact}</li>
          ))}
            </ul>
            <Link to="/dogs">Go Back</Link>
        </div>
    )
}

export default DogInfo;