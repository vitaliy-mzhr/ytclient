import React, { Component } from 'react';
import { Icon, Menu } from 'semantic-ui-react';

export default class DisplayListIcons extends Component {
  state = { activeItem: "first"}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.changeListStyle(name);
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu icon floated='right'>
        <Menu.Item
          name="first"
          active={activeItem === "first"}
          onClick={this.handleItemClick}
        >
          <Icon name='th' />
        </Menu.Item>

        <Menu.Item
          name="second"
          active={activeItem === "second"}
          onClick={this.handleItemClick}
        >
          <Icon name='th list' />
        </Menu.Item>
      </Menu>
    )
  }
};
