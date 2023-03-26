import {Component} from 'react';
import classes from '../Header/Header.module.css';
import { ThemeSwitcher } from '../Theme/ThemeSwitcher';

export class Header extends Component {

    render () {

        return (
            <div className={classes.header}>
                <ThemeSwitcher 
                theme={this.props.theme} 
                {...this.props}
                />
                <div className={classes.wrapper}>
                    <a className={classes.link} href='/'>Home</a>
                    <a className={classes.link} href='about'>About</a>
                    <a className={classes.link} href='faq'>FAQ</a>
                    <a className={classes.link} href='rules'>Rules</a>
                    <a className={classes.link} href='me'>Me</a>
                </div>
            </div>
        )
    }
}