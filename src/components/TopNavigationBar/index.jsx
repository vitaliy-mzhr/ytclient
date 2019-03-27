import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from "react-router-dom";

import YouTubeIcon from '../../components/Icons/YouTubeIcon';
import './style.scss';

class TopNavigationBar extends React.Component {
  render() {
    return (
      <Menu stackable>
        <Menu.Item>
          <NavLink to="/">
            <YouTubeIcon />
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            exact
            activeClassName="ytc-nav_selected"
            to="/"
          >
            Main
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink
            activeClassName="ytc-nav_selected"
            to="/favorites"
          >
            Favorites
          </NavLink>
        </Menu.Item>
      </Menu>
    )
  }
}

export default TopNavigationBar;