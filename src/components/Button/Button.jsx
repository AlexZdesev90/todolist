import { Component } from 'react';
import ButtonRender from './ButtonRender';

export class Button extends Component {
  render() {
    return <ButtonRender {...this.props} />;
  }
}
