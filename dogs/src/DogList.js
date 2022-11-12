import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
    return (
        <div>
            <h1>welcome to the list of dogs, click on a dog and learn about a dog</h1>
        
            {dogs.map(d => (
                <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            ))}
        </div>
    )
};

export default DogList;
