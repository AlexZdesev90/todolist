import { Component } from 'react';
import BoxRender from './BoxRender';

export class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  boxes = ['All', 'Active', 'Complited'];
  activeHandlier = (i) => {
    this.boxes.map((_, indx) => (indx === i ? this.setState({ activeIndex: indx }) : null));
    this.props.idHandlier(i);
  };

  render() {
    const { activeIndex } = this.state;
    const { items } = this.props;
    return (
      <BoxRender
        items={items}
        activeIndex={activeIndex}
        boxes={this.boxes}
        activeHandlier={this.activeHandlier}
      />
    );
  }
}
