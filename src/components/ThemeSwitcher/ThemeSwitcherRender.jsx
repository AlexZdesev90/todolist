import React from 'react';
import classes from './ThemeSwitcher.module.css';
import { HiMoon, HiOutlineSun } from 'react-icons/hi';

export const ThemeSwitcherRender = ({darkTheme, changeTheme}, ...props) => {
  return (
    <div className={classes.theme} {...props} onClick={() => changeTheme()}>
        {darkTheme === true ? (
          <HiMoon className={classes.icon} />
        ) : (
          <HiOutlineSun className={classes.icon} />
        )}
      </div>
  )
}

