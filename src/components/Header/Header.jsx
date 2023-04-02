import { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { HeaderRender } from './HeaderRender';

export class Header extends Component {
  render() {
    const { darkTheme } = this.context;
    return <HeaderRender darkTheme={darkTheme} />;
  }
}

Header.contextType = ThemeContext;
