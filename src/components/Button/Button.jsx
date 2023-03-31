import {Component} from 'react';
import classes from '../Button/Button.module.css';

export class Button extends Component {

    render () {
        return (
            <button className={[classes.btn, classes[this.props.color]].join(' ')} {...this.props}>
                {this.props.children}
            </button>
        )
    }
}