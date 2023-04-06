import React from 'react';
import classes from '../DropDown/DropDown.module.css';
import { CiMenuBurger } from 'react-icons/ci';
import { CgAddR } from 'react-icons/cg';
import { RxArchive } from 'react-icons/rx';
import { BsInfoSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export const DropDownRender = (props) => {
  const { changeModalMode, showArchive } = props;
  return (
    <div className={classes.dropdown}>
      <span className={classes.label}>
        {' '}
        <CiMenuBurger />
      </span>
      <ul className={classes.ul}>
        <li onClick={(e) => changeModalMode(e)}>
          <i className={classes.current}></i>
          <a className={classes.link} href='/'>
            <CgAddR />
            &nbsp;Add todo
          </a>
        </li>
        <li onClick={(e) => showArchive(e)}>
          <i className={classes.current}></i>
          <a className={classes.link} href='/'>
            <RxArchive />
            &nbsp;Archive
          </a>
        </li>
        <li>
          <i className={classes.current}></i>
          <Link className={classes.link} to='/info'>
            <BsInfoSquare />
            &nbsp;Info
          </Link>
        </li>
      </ul>
    </div>
  );
};
