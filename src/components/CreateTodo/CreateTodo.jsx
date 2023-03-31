import {Component} from 'react';
import { Button } from '../Button/Button';
import classes from '../CreateTodo/CreateTodo.module.css';
import { Input } from '../Input/Input';
import { IoAddCircleOutline } from "react-icons/io5";
import { ImExit } from "react-icons/im";

export class CreateTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            descriptionValue: '',
        }
    }

    onClickAddTodoHandlier(title, description) {
        this.props.setItems(title, description);
        this.setState({titleValue: ''});
        this.setState({descriptionValue: ''});
    }

    render () {
        const {titleValue, descriptionValue} = this.state;
        return (
            <div className={classes.box}>
                <div className={classes.content}>
                <div className={classes.wrapper}>
                    <label className={classes.label} htmlFor="title">Title: </label>
                    <Input id="title" type='text' value={titleValue} onChange={(e) => this.setState({titleValue: e.target.value})}/>
                </div>
                <div className={classes.wrapper}>
                    <label className={classes.label} htmlFor="desc">Description: </label>
                    <Input id="desc" type='text' value={descriptionValue} onChange={(e) => this.setState({descriptionValue: e.target.value})}/>
                </div>
                <Button color='blue' onClick={() => this.onClickAddTodoHandlier(titleValue, descriptionValue)}><IoAddCircleOutline/></Button>
                <Button color='blue' onClick={() => this.props.onClickExit()}><ImExit/></Button>
                </div>
            </div>
        )
    }
}
