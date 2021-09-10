import React, { useState } from 'react';
import Student from './Student';
import StudentData from './StudentData';

const App = () => {
  const studentComponent = StudentData.map(student=><Student name={student.name}
     bio={student.bio}/>)

  return (
    <div>
      {studentComponent}
    </div>
  );
}

export default App

