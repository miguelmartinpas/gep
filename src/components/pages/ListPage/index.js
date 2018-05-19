import React from 'react';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { Button } from 'semantic-ui-react';

import * as Actions from '../../../actions';

class ListPage extends React.Component {
  loadUsers(users) {
    return isEmpty(users)
      ? 'users list is empty'
      : Object.keys(users).map((key, id) => (
        <li> {id} - {key} - {JSON.stringify(users[key], null, 2)} </li>
      ));
  }

  render() {
    const usersList = !isLoaded(this.props.users)
      ? 'Loading'
      : this.loadUsers(this.props.users);

    return (
      <div>
        <h1>Users</h1>
        <ul>
          {usersList}
        </ul>
        {JSON.stringify(this.props.workshifts, null, 2)}
        <Button onClick={() => this.props.fetchUsers()}>Action - Redux</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    users: state.firebase.data.users,
    workshifts: state.firebase.data.workshifts,
    profile: state.firebase.profile // load profile
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchUsers: Actions.fetchUsers
  }, dispatch);
};

export default compose(
  firebaseConnect([
    'users', // { path: '/todos' } // object notation
    'workshifts'
  ]),
  connect(mapStateToProps, mapDispatchToProps)
)(ListPage);
