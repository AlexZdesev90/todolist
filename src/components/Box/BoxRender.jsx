import React from 'react';
import classes from '../Box/Box.module.css';

function BoxRender(props) {
  const { activeIndex, boxes, activeHandlier } = props;
  return (
    <div className={classes.wrapper}>
      {boxes.map((box, indx) => (
        <div
          key={box}
          onClick={() => activeHandlier(indx)}
          className={[classes.item, `${indx === activeIndex ? classes.active : ''}`].join(' ')}
        >
          {box}
        </div>
      ))}
    </div>
  );
}

export default BoxRender;
