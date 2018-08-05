import React, { Component } from 'react';
import './postProto.css';

class PostProto extends Component {

	handleBtnClick=(e)=>{
		e.preventDefault();
		this.props.data.list.forEach(item=> {
			console.log(item.id===e.target.id);
			item.id===e.target.id && this.props.history.push('/Posts', {some:item});
		});
		
	}

	render(){
		return(this.props.data.list.map((item,i)=>{
			return(	<div className="postsProto-main-container">
						<div className="postsProto-container" onClick={this.handleBtnClick} key={Math.random()} id={item.id}>
							<span className="post-title" key={Math.random()} id={item.id}>{item.title}</span>
							<span className="post-catg" key={Math.random()} id={item.id}>{item.category}</span>
						</div>
						<div className = "LSC-container" >
						<span>0</span><input className="LSC-btn" type="button" value="Like"/>
						<span>0</span><input className="LSC-btn" type="button" value="Share"/>
						<span>0</span><input className="LSC-btn" type="button" value="Comment"/>
					</div>
					<div className = "comment-container">
						<label htmlFor="comments">Comment</label>
						<div className="comment-input-container">
							<input id="comments" type="text"/>
							<span>enter</span>
						</div>
					</div>
						
					</div>
					)

		})
		)
	}
}

export default PostProto;


