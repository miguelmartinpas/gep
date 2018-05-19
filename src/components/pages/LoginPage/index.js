// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import { Grid, Form, Segment, Button, Image, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import firebase from 'firebase';
import 'firebaseui/dist/firebaseui.css';

const GridWrapper = styled(Grid)`
  min-height: 90vh;
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.googleProvider = new firebase.auth.GoogleAuthProvider();
    this.facebookProvider = new firebase.auth.FacebookAuthProvider();
    this.twitterProvider = new firebase.auth.TwitterAuthProvider();
    this.state = {
      image: 'http://pngimg.com/uploads/simpsons/simpsons_PNG15.png'
    };
  }

  getUserKey(email) {
    return email.substring(0, email.lastIndexOf('@')).replace(/([._%+-])/g, '');
  }

  authUser(result) {
    console.log('>provider result>', result, this.props.history);

    const userId = this.getUserKey(result.additionalUserInfo.profile.email);

    // console.log('>>>>', 'users/'.concat(userId), result);

    const user = firebase.database().ref().child('users/'.concat(userId));

    user.on('value', (snapshot) => {
      console.log('value Ya existe!!', snapshot.exists());
      if (snapshot.exists()) {
        console.log('value Ya existe!!', snapshot.val(), result);
        // TODO Login it a reload new page
        this.props.history.push('/list');
      } else {
        console.log('value usuario no existe', result);
        const updates = {};
        updates['/users/'.concat(userId)] = {
          isAdmin: false,
          profile: result.additionalUserInfo.profile,
          workshifts: {}
        };
        firebase.database().ref().update(updates);
      }
    });
  }

  authWith(provider) {
    firebase.auth().signInWithPopup(provider).then((result) => {
      this.authUser(result);
    }).catch((error) => {
      console.log('>provider error>', error);
    });
  }

  authWithGoogle() {
    this.authWith(this.googleProvider);
  }

  authWithTwitter() {
    this.authWith(this.twitterProvider);
  }

  authWithFacebook() {
    this.authWith(this.facebookProvider);
  }

  render() {
    return (
      <GridWrapper verticalAlign="middle" centered columns={3}>
        <Grid.Column>
          <Image centered circular size="small" bordered src={this.state.image} />
          <Segment>
            <Form>
              <Form.Group widths="equal">
                <Form.Input fluid label="User" placeholder="User" required />
                <Form.Input fluid label="Password" placeholder="Password" required type="password" />
              </Form.Group>
              <Button right="true" type="submit">Submit</Button>
            </Form>
          </Segment>
          <div>
            <Button color="facebook" onClick={() => this.authWithFacebook()}>
              <Icon name="facebook" /> Facebook
            </Button>
            <Button color="twitter" onClick={() => this.authWithTwitter()}>
              <Icon name="twitter" /> Twitter
            </Button>
            <Button color="google plus" onClick={() => this.authWithGoogle()}>
              <Icon name="google plus" /> Google Plus
            </Button>
          </div>
        </Grid.Column>
      </GridWrapper>
    );
  }
}

export default LoginPage;
