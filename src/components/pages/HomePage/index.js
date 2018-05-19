// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import moment from 'moment';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../../../actions';

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
      console.log('users', snapshot.val());
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
    return Object.keys(this.state.users)
      .map(key => (
        <li key={this.state.users[key].name}>
          {this.state.users[key].name} / {this.state.users[key].mail}
        </li>
      ));
  }

  getListOfAccess() {
    return this.state.access && this.state.access.map(item => <li key={item}>{item}</li>);
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

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchUsers: Actions.fetchUsers
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
