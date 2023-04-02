import { Component } from 'react';
import CreateTodoRender from './CreateTodoRender';

export class CreateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleValue: '',
      descriptionValue: '',
    };
  }

  onClickAddTodoHandlier(title, description) {
    this.props.setItems(title, description);
    this.setState({ titleValue: '' });
    this.setState({ descriptionValue: '' });
  }

  onChangeTitleHaldlier = (value) => {
    this.setState({ titleValue: value });
  };

  onChangeDescriptionHaldlier = (value) => {
    this.setState({ descriptionValue: value });
  };

  render() {
    const { titleValue, descriptionValue } = this.state;
    const { onClickExit } = this.props;
    return (
      <CreateTodoRender
        titleValue={titleValue}
        descriptionValue={descriptionValue}
        onClickAddTodoHandlier={(title, description) => this.onClickAddTodoHandlier(title, description)}
        changeTitle={this.onChangeTitleHaldlier}
        changeDescription={this.onChangeDescriptionHaldlier}
        onClickExit={onClickExit}
      />
    );
  }
}
