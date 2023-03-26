import {Component} from 'react';
import classes from '../Time/Time.module.css';

export class Time extends Component {

    getDay() {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const date = new Date();
        return date.getDate() + ' ' + months[date.getMonth()];
    }
    render () {

        return (
            <div className={classes.date}>
                {this.getDay()}
            </div>
        )
    }
}
