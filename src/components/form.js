import React, { Component } from 'react';
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
				<input 
					id="input-titles" 
					className="transparent-back" 
					type="text" 
					name="title"
					onChange = {this.props.Change}
					value={this.props.title}/>
				<input 
					id="input-category" 
					className="transparent-back" 
					type="text" 
					name="category"
					onChange = {this.props.Change}
					value={this.props.category}/>
				<textarea 
					name="description" 
					className="transparent-back" 
					id="textarea-descrp" 
					onChange = {this.props.Change}
					value={this.props.description}
					cols="30" 
					rows="10">
				</textarea>
				<button type="submit" onClick={this.handleBtnClick} >Add New Post</button>
			</form>
		)
	}
}

export default Form;