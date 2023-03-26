import {Component} from 'react';
import classes from '../Theme/Theme.module.css';
import { HiMoon, HiOutlineSun } from "react-icons/hi";

export class ThemeSwitcher extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render () {
    // const {theme} = this.props
        return (
            <div className={classes.theme} {...this.props}>
                {this.props.theme === 'light' ? <HiMoon/> : <HiOutlineSun/>}
                {/* <span>{theme}</span> */}
            </div>
        )
    }
}