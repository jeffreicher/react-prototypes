import React from 'react';
import Welcome from './welcome';
import {Route} from 'react-router-dom';

export default () => (
    <div className="container">
        <h1>WE ROUTING FAM</h1>
        <Route path="/" component={Welcome} />
    </div>
)


