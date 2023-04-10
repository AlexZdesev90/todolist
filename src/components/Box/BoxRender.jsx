import React from 'react';
import classes from '../Box/Box.module.css';

function BoxRender(props) {
  const { items, activeIndex, boxes, activeHandlier } = props;
  if( items.length === 0 ) {
    return null;
  }
  return (
    <div className={classes.wrapper}>
      {boxes.map((box, indx) => (
        <button 
          key={box}
          onClick={() => activeHandlier(indx)}
          className={[classes.item, `${indx === activeIndex ? classes.active : ''}`].join(' ')}
        >
          {box}
        </button>
      ))}
    </div>
  );
}

export default BoxRender;
