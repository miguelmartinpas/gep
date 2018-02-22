// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import { Grid, Form, Segment, Button, Image } from 'semantic-ui-react';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: 'http://pngimg.com/uploads/simpsons/simpsons_PNG15.png'
    };
  }
  render() {
    return (
      <div>
        <h3>?</h3>
        <Grid centered columns={4}>
          <Grid.Column>
            <Image centered circular size="small" bordered src={this.state.image} />
            <Segment>
              <Form>
                <Form.Group widths="equal">
                  <Form.Input fluid label="User" placeholder="User" required />
                  <Form.Input fluid label="Password" placeholder="Password" required type="password" />
                </Form.Group>
                <Button right type="submit">Submit</Button>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginPage;
