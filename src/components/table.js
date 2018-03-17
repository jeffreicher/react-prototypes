import React from 'react';

const Table = () => {
    return (
        <table className="table">
            <thead className="thead-inverse">
                <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>John</th>
                    <th>Math</th>
                    <th>90</th>
                </tr>
                <tr>
                    <th>Jeff</th>
                    <th>English</th>
                    <th>100</th>
                </tr>
                <tr>
                    <th>Nathan</th>
                    <th>Calculator</th>
                    <th>80</th>
                </tr>
            </tbody>
        </table>
    );
}

export default Table;