import React, {Component} from 'react';
import './Home-style.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            script: "movie",
            name: "",
            rating: "0",
            platform: "0",
            password: "",
        }

        this.scriptChange = this.scriptChange.bind(this);
        this.movieNameChange = this.movieNameChange.bind(this);
        this.ratingChange = this.ratingChange.bind(this);
        this.platformChange = this.platformChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    scriptChange(event) {
        this.setState({script: event.target.value});
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

    async sendRequest() {
        const script = this.state.script;
        const name = this.state.name;
        const rating = this.state.rating;
        const platform = this.state.script === "movie" || this.state.script === "yesterday" ? this.state.platform : "1";
        const password = this.state.password;

        if (!name || rating === "0" || platform === "0"){
            alert("Movie Name, Rating & Watched Using needs to be filled in");
            return 0;
        }
        if (this.state.requestSent){
            alert("Request has been sent, don't try twice...");
            return 0;
        }
        this.setState({
            ...this.state,
            requestSent: true,
        });
        alert("Sending...");

        const url = "https://api.rajbariah.com/bash/movie-add?" +
            "name=" + name +
            "&rating=" + rating +
            "&platform=" + platform +
            "&password=" + password +
            "&script=" + script;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const content = await response.json();
        alert(content.message);
        if (!content.success) {
            this.setState({
                ...this.state,
                requestSent: false,
            });
        }
    }

    render() {
        return (
            <div>
                <h2><a href="https://raj.bar/">raj.Bar</a> / <a href="https://raj.bar/movies/">Movie-Add</a></h2>
                <h3 className="miniHeaders">Script:</h3>
                <select className="inputs" value={this.state.script} onChange={this.scriptChange}>
                    <option value="movie">Movie</option>
		    <option value="yesterday">Yesterday</option>
                    <option value="oldMovie">Old Movie</option>
                    <option value="tv">TV</option>
                </select>
                <h3 className="miniHeaders">{this.state.script === "tv" ? "TV show" : "Movie"} Name:</h3>
                <input
                    className="inputs"
                    type="text"
                    name="movie-name"
                    onChange={this.movieNameChange}
                />
                <h3>Rating:</h3>
                <select className="inputs" value={this.state.rating} onChange={this.ratingChange}>
                    <option value="0">select</option>
                    <option value="6">God tier</option>
                    <option value="5">Loved</option>
                    <option value="4">Liked</option>
                    <option value="3">Average</option>
                    <option value="2">Disliked</option>
                    <option value="1">Hated</option>
                </select>
                {this.state.script === "movie" || this.state.script === "yesterday" ?
                    (<div>
                        <h3>Watched using:</h3>
                        <select className="inputs" value={this.state.platform} onChange={this.platformChange}>
                            <option value="0">select</option>
                            <option value="n">Netflix</option>
                            <option value="p">Prime</option>
                            <option value="c">Cinema</option>
                            <option value="t">Television</option>
                            <option value="r">Rakuten</option>
                            <option value="d">Disney+</option>
                            <option value="s">NowTV</option>
                            <option value="l">Apple TV+</option>
                            <option value="f">Flight</option>
                        </select>
                    </div>) : <div/>
                }
                <h4>Password</h4>
                <input
                    type="password"
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
