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
            notes: "",
            password: "",
            toastMessage: "",
            toastType: "info",
            toastVisible: false,
            loading: false,
            requestSent: false,
        }

        this.scriptChange = this.scriptChange.bind(this);
        this.movieNameChange = this.movieNameChange.bind(this);
        this.ratingChange = this.ratingChange.bind(this);
        this.platformChange = this.platformChange.bind(this);
        this.notesChange = this.notesChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
        this.toastTimeout = null;
    }

    componentWillUnmount() {
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
    }

    showToast(message, type = "info") {
        if (this.toastTimeout) {
            clearTimeout(this.toastTimeout);
        }
        this.setState({
            toastMessage: message,
            toastType: type,
            toastVisible: true
        });
        this.toastTimeout = setTimeout(() => {
            this.setState({ toastVisible: false });
        }, 4000);
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

    notesChange(event) {
        this.setState({notes: event.target.value})
    }

    passwordChange(event){
        this.setState({password: event.target.value});
    }

    async sendRequest() {
        const script = this.state.script;
        const name = this.state.name;
        const rating = this.state.rating;
        const platform = this.state.script === "movie" || this.state.script === "yesterday" || this.state.script === "tvcurrent" ? this.state.platform : "1";
        const notes = this.state.script === "tvcurrent" ? "" : this.state.notes;
        const password = this.state.password;

        if (script === "tvcurrent") {
            if (!name || platform === "0") {
                this.showToast("TV show Name & Watched Using needs to be filled in", "error");
                return 0;
            }
        } else {
            if (!name || rating === "0" || platform === "0"){
                this.showToast("Movie Name, Rating & Watched Using needs to be filled in", "error");
                return 0;
            }
        }
        if (this.state.loading || this.state.requestSent){
            this.showToast("Request has been sent, don't try twice...", "info");
            return 0;
        }

        this.setState({
            loading: true,
            requestSent: true,
        });
        this.showToast("Sending...", "info");

        const url = "https://api.rajbariah.com/bash/movie-add?" +
            "name=" + encodeURIComponent(name) +
            "&rating=" + encodeURIComponent(rating) +
            "&platform=" + encodeURIComponent(platform) +
            "&password=" + encodeURIComponent(password) +
            "&notes=" + encodeURIComponent(notes) +
            "&script=" + encodeURIComponent(script);

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
            const content = await response.json();
            this.showToast(content.message, content.success ? "success" : "error");
            
            if (!content.success) {
                this.setState({
                    loading: false,
                    requestSent: false,
                });
            } else {
                this.setState({
                    loading: false,
                });
            }
        } catch (e) {
            this.showToast("Failed to connect to the api server.", "error");
            this.setState({
                loading: false,
                requestSent: false,
            });
        }
    }

    render() {
        const showPlatform = this.state.script === "movie" || this.state.script === "yesterday" || this.state.script === "tvcurrent";
        const placeholderText = this.state.script === "tv" || this.state.script === "tvcurrent" ? "e.g., Breaking Bad" : "e.g., Inception";

        return (
            <div className="card">
                {/* Custom Toast Notification */}
                {this.state.toastVisible && (
                    <div className={`toast toast-${this.state.toastType}`}>
                        <span className="toast-icon">
                            {this.state.toastType === 'success' ? '✓' : this.state.toastType === 'error' ? '✕' : 'ℹ'}
                        </span>
                        <span>{this.state.toastMessage}</span>
                    </div>
                )}

                <h2 className="header-title">
                    <a href="https://raj.bar/" target="_blank" rel="noreferrer">raj.Bar</a>
                    <span className="separator">/</span>
                    <a href="https://raj.bar/movies/" target="_blank" rel="noreferrer">Movie-Add</a>
                </h2>

                <div className="form-group">
                    <label className="form-label">Script</label>
                    <select 
                        className="inputs" 
                        value={this.state.script} 
                        onChange={this.scriptChange}
                        disabled={this.state.loading}
                    >
                        <option value="movie">Movie</option>
                        <option value="yesterday">Yesterday</option>
                        <option value="oldMovie">Old Movie</option>
                        <option value="tv">TV</option>
                        <option value="tvcurrent">Current TV</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className="form-label">{this.state.script === "tv" || this.state.script === "tvcurrent" ? "TV Show" : "Movie"} Name</label>
                    <input
                        className="inputs"
                        type="text"
                        placeholder={placeholderText}
                        value={this.state.name}
                        onChange={this.movieNameChange}
                        disabled={this.state.loading}
                    />
                </div>

                {this.state.script !== "tvcurrent" && (
                    <div className="form-group">
                        <label className="form-label">Rating</label>
                        <select 
                            className="inputs" 
                            value={this.state.rating} 
                            onChange={this.ratingChange}
                            disabled={this.state.loading}
                        >
                            <option value="0">Select rating...</option>
                            <option value="6">God tier</option>
                            <option value="5">Loved</option>
                            <option value="4">Liked</option>
                            <option value="3">Average</option>
                            <option value="2">Disliked</option>
                            <option value="1">Hated</option>
                        </select>
                    </div>
                )}

                {showPlatform && (
                    <div className="form-group">
                        <label className="form-label">Watched using</label>
                        <select 
                            className="inputs" 
                            value={this.state.platform} 
                            onChange={this.platformChange}
                            disabled={this.state.loading}
                        >
                            <option value="0">Select platform...</option>
                            <option value="n">Netflix</option>
                            <option value="p">Prime</option>
                            <option value="c">Cinema</option>
                            <option value="t">Television</option>
                            <option value="r">Rakuten</option>
                            <option value="d">Disney+</option>
                            <option value="s">NowTV</option>
                            <option value="f">Flight</option>
                            <option value="a">Apple TV+</option>
                            <option value="b">BBC iPlayer</option>
                        </select>
                    </div>
                )}

                {this.state.script !== "tvcurrent" && (
                    <div className="form-group">
                        <label className="form-label">Notes</label>
                        <input
                            className="inputs"
                            type="text"
                            placeholder="Add optional notes..."
                            value={this.state.notes}
                            onChange={this.notesChange}
                            disabled={this.state.loading}
                        />
                    </div>
                )}

                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        className="inputs"
                        type="password"
                        placeholder="••••••••"
                        value={this.state.password}
                        onChange={this.passwordChange}
                        disabled={this.state.loading}
                    />
                </div>

                <button 
                    className="submit-btn" 
                    disabled={this.state.loading || this.state.requestSent} 
                    onClick={() => this.sendRequest()}
                >
                    {this.state.loading ? (
                        <>
                            <div className="spinner"></div>
                            Sending...
                        </>
                    ) : this.state.requestSent ? "Submitted Successfully" : "Submit Entry"}
                </button>
            </div>
        )
    }
}

export default Home;
