import React from 'react';

function Student(props) {
    console.log(props)
    return (
        <div>
           <h2>Name: {props.name}</h2>
           <h2>Bio: {props.bio}</h2>
        </div>
    );
}

export default Student;