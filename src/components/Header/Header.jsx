import { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';
import classes from '../Header/Header.module.css';
import { ImGithub} from 'react-icons/im';
import { FcTodoList } from 'react-icons/fc';
import { ThemeSwitcher } from '../ThemeSwitcher';

export class Header extends Component {
  render() {
    const { darkTheme } = this.context;
    return (
      <div className={darkTheme ? classes.darkheader : classes.header}>
        <ThemeSwitcher/>
        <div className={classes.wrapper}>
          <div>
            <FcTodoList className={classes.linkList} />{' '}
            <span style={{ fontSize: '36px' }}>TODO LIST</span>
          </div>
          <div>
            <a className={classes.link} href="me">
              <ImGithub />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

Header.contextType = ThemeContext;
