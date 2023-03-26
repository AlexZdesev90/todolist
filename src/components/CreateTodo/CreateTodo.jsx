import {Component} from 'react';


export class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            descriptionValue: '',
        }
    }

    onClickAddTodoHandlier(title, description) {
            this.props.setItems(title, description)
    }

    render () {
        const {titleValue, descriptionValue} = this.state;
        return (
            <div>
                <div>
                    <label>Title: </label><input type='text' value={titleValue} onChange={(e) => this.setState({titleValue: e.target.value})}/>
                </div>
                <div>
                    <label>Description: </label><input type='text' value={descriptionValue} onChange={(e) => this.setState({descriptionValue: e.target.value})}/>
                </div>
                <button onClick={() => this.onClickAddTodoHandlier(titleValue, descriptionValue)}>Add</button>
            </div>
        )
    }
}
