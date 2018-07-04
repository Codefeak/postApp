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
			return(<div className="postsProto-container" onClick={this.handleBtnClick} key={Math.random()} id={item.id}>
						<span className="post-title" key={Math.random()} id={item.id}>{item.title}</span>
						<span className="post-catg" key={Math.random()} id={item.id}>{item.category}</span>
					</div>
					)

		})
		)
	}
}

export default PostProto;


