import React from 'react';
import { Button } from '../Button/Button';
import classes from '../CreateTodo/CreateTodo.module.css';
import { IoAddCircleOutline } from 'react-icons/io5';
import { ImExit } from 'react-icons/im';

const CreateTodoRender = (props) => {
  const {
    titleValue,
    descriptionValue,
    onClickAddTodoHandlier,
    onClickExit,
    changeTitle,
    changeDescription,
  } = props;
  return (
    <div className={classes.box}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <label className={classes.label} htmlFor='title'>
            <div className={classes.textAreaWrapper}>Title: </div>
          </label>
          <textarea
            className={classes.textarea}
            id='title'
            type='text'
            value={titleValue}
            onChange={(e) => changeTitle(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className={classes.wrapper}>
          <label className={classes.label} htmlFor='desc'>
            <div className={classes.textAreaWrapper}>Description: </div>
          </label>
          <textarea
            className={classes.textarea}
            id='desc'
            type='text'
            value={descriptionValue}
            onChange={(e) => changeDescription(e.target.value)}
            maxLength={100}
          />
        </div>
        <div className={classes.buttonWrapper}>
          <Button onClick={() => onClickAddTodoHandlier(titleValue, descriptionValue)}>
            <IoAddCircleOutline />
          </Button>
          <Button onClick={() => onClickExit()}>
            <ImExit />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodoRender;
