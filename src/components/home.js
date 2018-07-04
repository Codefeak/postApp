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

class Home extends React.Component{

	handleBtnClick=(e, prop)=>{
		e.preventDefault();
		console.log(this.props);
		e.target.type==="submit" 
		&& 	this.props.history.push("/Home", { some: "state" });
			this.props.Submit();
	}

	render(){
		return (
			<Router>
				<div>
					<Link to="/Form"><button id="add-btn">AddNew Post</button></Link>
					<Switch>
						<Route 
							exact strict path="/" 
							render={(prop)=>(<PostProto 
											{...prop}
											data={this.props.data}
										/>)}/>
						<Route 
							exact strict path="/Home" 
							render={(prop)=>(<PostProto 
											{...prop}
											data={this.props.data}
										/>)}/>
						<Route  
							strict path ="/Form" 
							render ={(prop)=>(<Form
											{...prop} 
											Submit={this.props.Submit}
											Change={this.props.Change}
											data={this.props.data}
											handleBtnClick= {this.handleBtnClick}
										/>)}/>
						<Route
							strict path = "/Posts"
							render = {(prop)=>(<Posts
											{...prop}
											data={this.props.data}
									/>)}/>
					</Switch>
					
				</div>
			</Router>
		)
	}
}

export default Home;
