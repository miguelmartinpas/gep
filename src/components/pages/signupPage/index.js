// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react';
import 'firebaseui/dist/firebaseui.css';

class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'signup page'
    };
  }
  render() {
    return (
      <div>
        {this.state.pageTitle}
      </div>
    );
  }
}

export default SignupPage;
