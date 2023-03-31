import {Component} from 'react';
import classes from '../Input/Input.module.css';

export class Input extends Component {

    render () {
        return (
            <div>
                    <input className={classes.input} 
                        {...this.props}
                    />
                </div>
        )
    }
}
