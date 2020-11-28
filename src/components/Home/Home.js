import React, {Component} from 'react';
import './Home-style.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            rating: "",
            platform: "",
            password: "",
        }

        this.movieNameChange = this.movieNameChange.bind(this);
        this.ratingChange = this.ratingChange.bind(this);
        this.platformChange = this.platformChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    movieNameChange(event) {
        this.setState({name: event.target.value})
    }

    ratingChange(event) {
        this.setState({rating: event.target.value});
    }

    platformChange(event) {
        this.setState({platform: event.target.value});
    }

    passwordChange(event){
        this.setState({password: event.target.value});
    }

    sendRequest() {
        const name = this.state.name;
        const rating = this.state.rating;
        const platform = this.state.platform;
        const password = this.state.password;
        console.log(name);
        console.log(rating);
        console.log(platform);
        console.log(password);
        const url = "localhost:2010/bash/movie-add?" +
            "name=" + name +
            "&rating=" + rating +
            "&platform=" + platform;
        console.log(url);
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send();
    }

    render() {
        return (
            <div>
                <h2>raj.Bar / Movie-Add</h2>
                <h3>Movie Name:</h3>
                <input
                    type="text"
                    name="movie-name"
                    onChange={this.movieNameChange}
                />
                <h3>Rating:</h3>
                <select value={this.state.rating} onChange={this.ratingChange}>
                    <option value="select">select</option>
                    <option value="6">God tier</option>
                    <option value="5">Loved</option>
                    <option value="4">Liked</option>
                    <option value="3">Average</option>
                    <option value="2">Disliked</option>
                    <option value="1">Hated</option>
                </select>
                <h3>Watched using:</h3>
                <select value={this.state.platform} onChange={this.platformChange}>
                    <option value="select">select</option>
                    <option value="n">Netflix</option>
                    <option value="p">Prime</option>
                    <option value="c">Cinema</option>
                    <option value="t">Television</option>
                    <option value="r">Rakuten</option>
                    <option value="d">Disney+</option>
                </select>
                <h4>Password</h4>
                <input
                    type="text"
                    name="password"
                    onChange={this.passwordChange}
                />
                <br />
                <button onClick={() => this.sendRequest()}>Submit</button>
            </div>
        )
    }
}

export default Home;
