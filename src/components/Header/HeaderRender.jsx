import classes from '../Header/Header.module.css';
import { ImGithub } from 'react-icons/im';
import { FcTodoList } from 'react-icons/fc';
import { ThemeSwitcher } from '../ThemeSwitcher';

export const HeaderRender = (props) => {
  const { darkTheme } = props;
  return (
    <div className={[classes.base, `${darkTheme ? classes.darkheader : classes.header}`].join(' ')}>
      <ThemeSwitcher />
      <div className={classes.wrapper}>
        <div>
          
          <span className={classes.title}><FcTodoList className={classes.linkList} />{' '}TODO LIST</span>
        </div>
        <div>
          <a className={classes.link} href="https://github.com/AlexZdesev90">
            <ImGithub />
          </a>
          <span style={{ marginRight: '30px', color: 'rgb(131, 108, 90)' }}>Zdesev Alexandr</span>
        </div>
      </div>
    </div>
  );
};
