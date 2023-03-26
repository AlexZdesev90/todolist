import {Component} from 'react';
import classes from '../Header/Header.module.css';
import { ThemeSwitcher } from '../Theme/ThemeSwitcher';

export class Header extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = { theme: 'light' }
    //     // this.handleClickTheme = this.handleClickTheme.bind(this)
    // }

    // componentDidMount(){
    //     console.log("dggd")
    //     document.body.setAttribute('data-theme', this.state.theme);

    // }

    // handleClickTheme(e) {
    //     // e.preventDefault()
    //     this.setState({theme: this.state.theme === 'light' ? 'dark' : 'light'})
    //     document.body.setAttribute('data-theme', this.state.theme);
    // }

    render () {
        // const {theme} = this.state;
        return (
            <div className={classes.header}>
                <ThemeSwitcher 
                theme={this.props.theme} 
                // onClick={() => this.handleClickTheme()}
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