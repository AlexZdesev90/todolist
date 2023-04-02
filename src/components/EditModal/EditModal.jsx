import { Component } from 'react';
import classes from '../EditModal/EditModal.module.css';
import { Button } from '../Button';

export class EditModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editTitleValue: this.props.editTitleValue,
      editDescriptionValue: this.props.editDescriptionValue,
    };
    // console.log(this.props)
  }

  onChangeTitleValue = (e) => {
    const value = e.target.value;
    this.setState({ editTitleValue: value });
  };

  onChangeDescriptionValue = (e) => {
    const value = e.target.value;
    this.setState({ editDescriptionValue: value });
  };

  render() {
    return (
      <div className={classes.wrapper}>
        <div className={classes.content}>
          Title:
          <textarea
            className={classes.textarea}
            type="text"
            value={this.state.editTitleValue}
            onChange={(e) => this.onChangeTitleValue(e)}
            maxLength={80}
          />
          Description:
          <textarea
            className={classes.textarea}
            type="text"
            value={this.state.editDescriptionValue}
            onChange={(e) => this.onChangeDescriptionValue(e)}
            maxLength={80}
          />
          <Button
            onClick={() =>
              this.props.onClickEditHandlier(
                this.state.editTitleValue,
                this.state.editDescriptionValue,
                this.props.id
              )
            }
          >
            Ok
          </Button>
        </div>
      </div>
    );
  }
}
