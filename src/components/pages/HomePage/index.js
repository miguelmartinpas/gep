// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import moment from 'moment';
import firebase from 'firebase';
import { firebaseConfig } from '../../../config';

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* const HomePage = () => (
  <div>Hello World</div>
); */

class HomePage extends React.Component {
  constructor() {
    super();
    this.state = { users: [], access: [] };
  }

  componentDidMount() {
    // https://firebase.google.com/docs/database/web/read-and-write?hl=es-419
    const users = firebase.database().ref().child('users');
    const access = firebase.database().ref().child('access');

    this.setAccess();

    users.on('value', (snapshot) => {
      this.setState({
        users: snapshot.val()
      });
    });

    access.on('value', (snapshot) => {
      console.log('access', snapshot.val());
      this.setState({
        access: snapshot.val()
      });
    });
  }

  setAccess() {
    const newAccessKey = firebase.database().ref().child('access').push().key;
    const updates = {};
    updates['/access/'.concat(newAccessKey)] = moment().format('MMMM Do YYYY, h:mm:ss a');

    return firebase.database().ref().update(updates);
  }

  getListOfUser() {
    return this.state.users.map(user => <li key={user.name}>{user.name} / {user.mail}</li>);
  }

  getListOfAccess() {
    return this.state.access.map(item => <li key={item}>{item}</li>);
  }

  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <ul>{this.getListOfUser()}</ul>
      </div>
    );
  }
}

export default HomePage;
