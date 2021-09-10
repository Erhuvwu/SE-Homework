import React from 'react';

function Student(props) {
    console.log(props)
    return (
        <div>
           <h2>Name: {props.names}</h2>
        </div>
    );
}

export default Student;