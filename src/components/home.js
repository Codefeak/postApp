import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
} from 'react-router-dom';
import PostProto from './postProto';
import Form from './form';
import Posts from './posts';
import './home.css';

class Home extends React.Component {

	handleBtnClick = (e, prop) => {
		e.preventDefault();
		console.log(this.props);
		e.target.type === "submit"
			&& this.props.history.push("/Home", { some: "state" });
		this.props.Submit();
	}

	render() {
		return (
			<Router>
				<div className="main-container">
					<div className="header-container">
						<div className="four-lines">
							<div className="one-line"></div>
							<div className="one-line"></div>
							<div className="one-line"></div>
							<div className="one-line"></div>
						</div>
						<p>Under Construction!!!</p>
						<div className="search-container">
							<label>
								<input id="search" type="text" placeholder="Type to Search" />
								<a href="">Search</a>
							</label>
							<p id="signin-btn">Sign In</p>
						</div>
					</div>
					<div className="blog-container" alt="New Post">
						<div id="add-btn">
							<Link to="/Form">...
							</Link>
						</div>

						<Switch>
							<Route
								exact strict path="/"
								render={(prop) => (<PostProto
									{...prop}
									data={this.props.data}
								/>)} />
							<Route
								exact strict path="/Home"
								render={(prop) => (<PostProto
									{...prop}
									data={this.props.data}
								/>)} />
							<Route
								strict path="/Form"
								render={(prop) => (<Form
									{...prop}
									Submit={this.props.Submit}
									Change={this.props.Change}
									data={this.props.data}
									handleBtnClick={this.handleBtnClick}
								/>)} />
							<Route
								strict path="/Posts"
								render={(prop) => (<Posts
									{...prop}
									data={this.props.data}
								/>)} />
						</Switch>
					</div>
					<footer className="footer-container">footer is footer</footer>
				</div>
			</Router>
		)
	}
}

export default Home;
