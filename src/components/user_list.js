import React, {Component} from 'react';
import {connect} from 'react-redux';
// import * as actions from '../actions';
import {FU} from "../actions/index"

class UserList extends Component {
  renderUser(user){
    return(
      <div className = "card card-block" key = {user.name}>
        <h4 className = "card-title">{user.name}</h4>
          <p className = "card-text"> {user.company.name}</p>
          <a className = "btn btn-primary" href = {user.website}>Website</a>
      </div>
    );
  }
  componentWillMount(){
    this.props.FU();
  }
  render(){
    return(
      <div className = "user-list">
        {this.props.users.map(this.renderUser)}
      </div>
    );
  }
}
function MapStateToProps(state){
  return {users: state.users}
}
export default connect(MapStateToProps, {FU})(UserList);
