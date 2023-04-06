import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { TfiClose } from 'react-icons/tfi';
import classes from '../Search/Search.module.css';

export const SearchRender = ({searchValue, onChangeHandlier, onClickHandlier}) => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => onChangeHandlier(e)}
          className={classes.input}
        />
        <div onClick={() => onClickHandlier()} className={classes.icon}>
          <BsSearch className={classes.i} />
          <TfiClose className={classes.ix} />
        </div>
      </div>
    </div>
  );
};
