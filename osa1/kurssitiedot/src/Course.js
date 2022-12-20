import React from "react";

const Header = ({ name }) => {
    return (<h2>{name}</h2>)
}

const Total = ({ parts }) => {
    return (<p>Total number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}</p>)
}

const Part = ({ partname, partexercises }) => {
    return (<p>{partname} {partexercises}</p>)
}

const Content = ({ parts }) => {
    return (<div>{parts.map(part => <Part key={part.id} partname={part.name} partexercises={part.exercises}/>)}</div>)
}

const Course = ({ course }) => {
    return (
        <div>
            <Header name={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course;