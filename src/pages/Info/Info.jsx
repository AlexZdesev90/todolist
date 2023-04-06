import { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { InfoRender } from './InfoRender';

export class Info extends Component {
  render() {
    const { darkTheme } = this.context;
    return <InfoRender darkTheme={darkTheme} />;
  }
}

Info.contextType = ThemeContext;
