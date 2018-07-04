import React, { Component } from 'react';
import Home from './components/home';
import './App.css';

class App extends Component {
  state={
        id:"",
        title:"",
        category:"",
        description:"",
        list:[
                      {id:'0',
                      title:"bla bla",
                      category:"bal bala bal",
                      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",},
                      {id:'1',
                      title:"foo",
                      category:"general",
                      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",},
                      {id:'2',
                      title:"bar",
                      category:"study",
                      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",},
                      {id:'3',
                      title:"foo-bar",
                      category:"practice",
                      description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",},
        ],
  }

  handleSubmit=(e)=>{
    let tmp = {};
    let tmpId = Math.random().toString(36).substr(4,6);
    this.setState({id:tmpId});
    tmp.id = this.state.id;
    tmp.title= this.state.title;
    tmp.category = this.state.category;
    tmp.description = this.state.description;
    this.setState({list:[...this.state.list].concat(tmp)});
      
  }

  componentDidMount=()=>{
    const tmp = Math.random().toString(36).substr(4,6);
    this.setState({id:tmp})
  }

  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }


  render() {
    return (
      <div className="App">
        <Home 
          Change={this.handleChange}
          Submit = {this.handleSubmit}
          data={this.state}
          />
      </div>
    );
  }
}

export default App;
