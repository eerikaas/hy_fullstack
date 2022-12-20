import React from "react";

const Persons = ({ show }) => {
    return (
        <div>
        {show.map((person, index) => (
          <div key={index}>
            <p>{person.name} {person.number}</p>
          </div>
        ))}
        </div>
    )
}

export default Persons;