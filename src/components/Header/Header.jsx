import {Component} from 'react';
import ThemeContext from '../../ThemeContext';
import classes from '../Header/Header.module.css';
import { ThemeSwitcher } from '../Theme/ThemeSwitcher';
import { ImGithub, ImLinkedin } from "react-icons/im";
import { SiInstagram } from "react-icons/si";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaQuestionCircle } from "react-icons/fa";
import { FcTodoList } from "react-icons/fc";


export class Header extends Component {

    render () {
        const {darkTheme} = this.context;
        return (
            <div className={darkTheme ? classes.darkheader : classes.header}>
                <ThemeSwitcher 
                // theme={this.props.theme}
                // {...this.props}
                />
                <div className={classes.wrapper}>
                    <div>
                        <FcTodoList className={classes.linkList} /> <span style={{fontSize: "36px"}}>TODO LIST</span>
                    </div>
                    <div>
                        <a className={classes.link} href='me'><ImGithub/></a>
                    </div>
                </div>
            </div>
        )
        {/* <a className={classes.link} href='/'><FaQuestionCircle/></a>
        <a className={classes.link} href='about'><SlSocialVkontakte/></a>
        <a className={classes.link} href='faq'><ImLinkedin/></a>
        <a className={classes.link} href='rules'><SiInstagram/></a> */}
    }
}

Header.contextType = ThemeContext;