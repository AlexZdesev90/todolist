import React from 'react';
import classes from '../Input/Input.module.css';

export const InputRender = (props) => {
  return (
    <div>
      <input maxLength={40} className={classes.input} {...props} />
    </div>
  );
};
