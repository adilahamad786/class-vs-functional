import { Component } from 'react';

import classes from './User.module.css';

class User extends Component {

  // componentWillUnmount run before the component is remove
  componentWillUnmount() {
    console.log("User component is removed!");
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
}


// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
