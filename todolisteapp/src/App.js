import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import firebase from './Firebase';
import { Table } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('boards');
    this.unsubscribe = null;
    this.state = {
      boards: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const boards = [];
    querySnapshot.forEach((doc) => {
      const { title, description, author } = doc.data();
      boards.push({
        key: doc.id,
        doc, // DocumentSnapshot
        title,
        description
        
      });
    });
    this.setState({
      boards
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="body" >
     <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading"> <h2>          To-Do-List Application </h2></div>
        </div>
 </div>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            
          </div> 
          <div class="panel-body">
            <h4 ><Link to="/create">Add Note</Link></h4>
            <Table  dark class="table table-stripe">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                 
                </tr>
              </thead>
              <tbody>
                {this.state.boards.map(board =>
                  <tr>
                    <td><Link to={`/show/${board.key}`}>{board.title}</Link></td>
                    <td>{board.description}</td>
                  </tr>
                )}
              </tbody>
            </Table >
          </div>
        </div>
      </div>
      
      </div>
    );
  }
}

export default App;