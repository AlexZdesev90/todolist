import { CiMenuBurger } from 'react-icons/ci';
import { Box } from '../../components/Box';
import { Archive } from '../../components/Archive';
import { CreateTodo } from '../../components/CreateTodo';
import { DropDown } from '../../components/DropDown';
import { Items } from '../../components/Items';
import { Search } from '../../components/Search';
import { Time } from '../../components/Time';
import classes from './Home.module.css';

export const HomeRender = ({
  darkTheme,
  showArchive,
  archive,
  modal,
  items,
  init,
  isArchive,
  onClickArchiveClose,
  onClickExit,
  addItems,
  idHandlier,
  changeModalMode,
  onChangeSearchValue,
  onClickSearchDelete,
  changeValue,
  deleteTodo,
  onClickDoneHandlier,
  onClickAddInArchive,
  onSetItems,
  onChangeArchive
}) => {
  return (
    <div className={[classes.base, `${darkTheme ? classes.darkhome : classes.home}`].join(' ')}>
      <DropDown showArchive={showArchive} changeModalMode={changeModalMode} />
      <Time />
      <Archive showArchive={showArchive} archive={archive} isArchive={isArchive} items={items} onClickArchiveClose={onClickArchiveClose} onChangeArchive={onChangeArchive}/>

      {modal ? <CreateTodo onClickExit={onClickExit} items={items} setItems={addItems} /> : null}
      <Box idHandlier={idHandlier} />
      <span className={classes.lengthInfo}>You have {init.length} todos</span>
      <br />
      <Search
        items={items}
        onChangeSearchValue={onChangeSearchValue}
        onClickDelete={onClickSearchDelete}
      />
      {items.length > 0 ? (
        <Items
          changeValue={changeValue}
          items={items}
          init={init}
          removeTodo={deleteTodo}
          onClickDoneHandlier={onClickDoneHandlier}
          onSetItems={onSetItems}
          onClickAddInArchive={onClickAddInArchive}
        />
      ) : (
        <div className={classes.info}>
          If you want, open menu &nbsp;
          <CiMenuBurger />
          &nbsp; and create todo !
        </div>
      )}
    </div>
  );
};
