import { Component } from 'react';
import { InputRender } from './InputRender';

export class Input extends Component {
  render() {
    return <InputRender {...this.props} />;
  }
}
