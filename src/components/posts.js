import React, { Component } from 'react';
import './posts.css';

class Posts extends Component{

	handleBack=(e)=>{
		e.preventDefault();
		this.props.history.push("/Home" );
	}

	handleDelete=(e)=>{
		e.preventDefault();
		const tmp = this.props.data.list.filter(item=>{
			return item.id !== this.props.location.state.some.id
		})
		console.log(this.props)
		this.props.data.list = tmp;
		this.props.history.push("/Home");
	}

	render(prop){
		
		return(
			<div className="post-container">
				<div id="btn-container">
					<button className="common-btn" id="back-btn" onClick={this.handleBack}>Back</button>
					<button className="common-btn" id="delete-btn" onClick={this.handleDelete}>Delete</button>
				</div>
				<p className="posts-title" >{this.props.history.location.state.some.title}</p>
				<p className="posts-description" >{this.props.history.location.state.some.description}</p>			
			</div>
		)
	}
}
export default Posts;
