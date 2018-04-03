import React, { Component } from 'react';
import Movies from './movies';
import axios from 'axios';

class MovieContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    };

    componentWillMount() {
        const URL = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(URL).then(resp => {
            console.log('Success Result:', resp);
            this.setState({
                movies:resp.data.feed.entry
            });
        }).catch(err => {
            console.log('Error Log:', err.message);
        });
    };

    render () {
        console.log('State:', this.state);
        return (
            <div>
                <h2>Movie Container</h2>
                <Movies />
            </div>
        );
    };
};

export default MovieContainer;