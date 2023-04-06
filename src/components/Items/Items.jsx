import { Component } from 'react';
import { Item } from '../Item/Item';
import classes from '../Items/Items.module.css';

export class Items extends Component {
  render() {
    const { items, init, onClickAddInArchive } = this.props;
    return (
      <div className={classes.items}>
        {items?.map((item) => (
          <Item
            key={item.id}
            archive={this.props.archive}
            changeValue={this.props.changeValue}
            {...item}
            removeTodo={this.props.removeTodo}
            onClickDoneHandlier={this.props.onClickDoneHandlier}
            onClickAddInArchive={onClickAddInArchive}
          />
        ))}
      </div>
    );
  }
}
