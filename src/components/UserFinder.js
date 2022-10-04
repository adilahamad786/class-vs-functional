// import { Fragment, useState, useEffect } from 'react';
import { Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
import UsersContext from '../store/users-context';

// const DUMMY_USERS = [
//   { id: 'u1', name: 'Max' },
//   { id: 'u2', name: 'Manuel' },
//   { id: 'u3', name: 'Julie' },
// ];

class UserFinder extends Component {
    // using this concept you can use only one context
    static contextType = UsersContext;

    constructor() {
        super();
        this.state = {
            // filteredUsers : DUMMY_USERS,
            filteredUsers : [],
            searchTerm : ""
        }
    }

    // here componentDidMount is optional and it run only first time.
    componentDidMount() {
        // set http request ...
        // this.setState({filteredUsers : DUMMY_USERS});
        this.setState({filteredUsers :this.context.users});
    }

    searchChangeHandler = (event) => {
        this.setState({searchTerm : event.target.value});
    };

    // componentDidUpdate run for every state change 
    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchTerm !== this.state.searchTerm) { // use this condition for stoping infinite looping.
            this.setState({
                // filteredUsers : DUMMY_USERS.filter( user => user.name.includes(this.state.searchTerm)),
                filteredUsers : this.context.users.filter( user => user.name.includes(this.state.searchTerm)),
            })
        }
    }

    render() {
        return (
            <>
              <div className={classes.finder}>
                <input type='search' onChange={this.searchChangeHandler.bind(this)} />
              </div>
              <Users users={this.state.filteredUsers} />
            </>
        );
    }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;