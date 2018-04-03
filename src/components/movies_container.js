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
        const movieList = this.state.movies.map((movieInfo, index) => {
            return <Movies info={movieInfo} key={index} />;
        });
        return (
            <div>
                {movieList}
            </div>
        );
    };
};

export default MovieContainer;