import React, { Component } from 'react';
import UserItem from './UserItem';

class CurrentItems extends Component {
  render() {
    return (
      <div>
        <h2>I have list of current items</h2>
        <div>Add new item!</div>
        <div>
          <h3>Your current items:</h3>
          <div>
            {
              this.props.userItems.map(item => (
                <UserItem
                  key={item}
                  item={item}
                />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentItems
