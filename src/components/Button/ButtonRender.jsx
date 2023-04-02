import React from 'react';
import classes from '../Button/Button.module.css';

function ButtonRender({ children, ...props }) {
  return (
    <button className={[classes.btn, classes.size].join(' ')} {...props}>
      {children}
    </button>
  );
}

export default ButtonRender;
