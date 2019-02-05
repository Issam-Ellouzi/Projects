import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';
/*import {
  Container, Col, Form,
  FormGroup,  Input,
  Button,
} from 'reactstrap';*/

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('boards');
    this.state = {
      title: '',
      description: ''
    
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { title, description } = this.state;

    this.ref.add({
      title,
      description
     
    }).then((docRef) => {
      this.setState({
        title: '',
        description: ''
        
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }


  render() {
    const { title, description } = this.state;
    return (
      <div className="containers">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title"  class="w3-container w3-blue">
              Add Note
            </h3>
          </div>
          <div className="panel-body">
         
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
           
                <input type="text" className="formField" class="form-control"  name="title" value={title} onChange={this.onChange} placeholder="Write your title" />
              </div>
              <div class="form-group">
          
                <textArea className="formField" class="form-control" name="description" onChange={this.onChange} placeholder="Write your Description" cols="80" rows="3">{description}</textArea>
              </div>
             
              <button type="submit" className="Submit" class="btn btn-success">Submit</button>
              <div>
              <h4><Link to="/" class="btn btn-primary">Back To The Note List</Link></h4>
              </div>
            </form>
          </div>
        </div>
      </div> 
      
    );
  }
}

export default Create;