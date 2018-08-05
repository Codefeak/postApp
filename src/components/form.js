import React, { Component } from 'react';
import Proptypes from 'prop-types';
import './form.css';

class Form extends Component{

	handleBtnClick=(e)=>{
		e.preventDefault();
		e.target.type==="submit" 
		&& 	this.props.history.push("/Home", { some: "state" });
			this.props.Submit();
	}



	render(){
		return(
			<form id="input-form" className="transparent-back" onSubmit={this.props.Submit}>
				<h1 id="form-heading" className="transparent-back" >Heading</h1>
				<label>Title :
					<input 
						id="input-titles" 
						className="transparent-back" 
						type="text" 
						name="title"
						onChange = {this.props.Change}
						value={this.props.title}/>
				</label>
				<label> Category:
					<input 
						id="input-category" 
						className="transparent-back" 
						type="text" 
						name="category"
						onChange = {this.props.Change}
						value={this.props.category}/>
				</label>
				<label htmlFor="textarea-descrip">Description :</label>
				<textarea 
					name="description" 
					className="transparent-back" 
					id="textarea-descrp" 
					onChange = {this.props.Change}
					value={this.props.description}
					cols="30" 
					rows="10">
				</textarea>
				<button id="form-btn "type="submit" onClick={this.handleBtnClick} >Add Post</button>
			</form>
		)
	}
}

export default Form;

Form.propTypes = {
	title: Proptypes.string.isRequired,
	category:Proptypes.string.isRequied,
	Change:Proptypes.func.isRequired
}