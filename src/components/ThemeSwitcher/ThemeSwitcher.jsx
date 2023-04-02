import { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { ThemeSwitcherRender } from './ThemeSwitcherRender';

export class ThemeSwitcher extends Component {
  render() {
    const { darkTheme, changeTheme } = this.context;
    return (
      <ThemeSwitcherRender darkTheme={darkTheme} changeTheme={changeTheme}/>
    );
  }
}

ThemeSwitcher.contextType = ThemeContext;
