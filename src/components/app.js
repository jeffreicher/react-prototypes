import React from 'react';
import Table from './table';

const students = [
    {
        student: John,
        course: Math,
        grade: 90
    },
    {
        student: Jeff,
        course: Science,
        grade: 100
    },
    {
        student: Michael,
        course: Art,
        grade: 50
    }
];

const App = () => {
    return (
       <div className="container">
            <h1>Student Grade Table</h1>
            <Table data={students}/>
       </div>
    );
}

export default App;

