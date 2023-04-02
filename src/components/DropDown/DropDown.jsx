import { Component } from 'react';
import { DropDownRender } from './DropDownRender';

export class DropDown extends Component {
  render() {
    return <DropDownRender {...this.props} />;
  }
}
