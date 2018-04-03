import React from 'react';
import MovieContainer from './movies_container';

const App = () => {
    return (
        <div className="container">
            <h1 className="text-center">Axios Demo</h1>
            <MovieContainer />
        </div>
    );
};

export default App;
