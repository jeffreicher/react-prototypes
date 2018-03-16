import React from 'react';
import ReactDOM from 'react-dom';

const user = {
    firstName: 'Jeffrei',
    lastName: 'Cher',
    luckyNumber: luckyNumber()
}

function luckyNumber(){
    return Math.floor((Math.random() * 1000) +1);
}

function greeting(user){
    return (
    <div className='container'>
        <h1>Hello, my name is {user.firstName}</h1>
        <h2 className='text-muted'>Your lucky number is: {user.luckyNumber}</h2>
    </div>
    );
}

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);

