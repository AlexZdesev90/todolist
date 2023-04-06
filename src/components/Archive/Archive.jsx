import { Component } from 'react';
import classes from '../Archive/Archive.module.css';
import { Button } from '../Button';

export class Archive extends Component {
  onClickDelete = (number) => {
    const newArchive = this.props.archive.filter((item) => {
      return item.id !== number
    });
    localStorage.setItem('archive', JSON.stringify(newArchive))
    this.props.onChangeArchive(newArchive)
  }

  render() {
    const { isArchive, archive } = this.props;

    return (
      <div
        onClick={this.props.onClickArchiveClose}
        className={[classes.box, `${isArchive === true ? classes.show : ''}`].join(' ')}
      >
        <div className={classes.content}>
          Archive
          {archive.length === 0
            ? 'Empty'
            : archive?.map((item, index) => (
                <div className={classes.wrapper} key={item.title}>
                  {index + 1} - Title: {item.title}
                  <div>Description: {item.description}</div>
                  <Button onClick={()=>this.onClickDelete(item.id)}>Delete</Button>
                </div>
              ))}
          <Button>Back</Button>
        </div>
      </div>
    );
  }
}
