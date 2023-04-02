import { CiMenuBurger } from 'react-icons/ci';
import { Box } from '../Box';
import { Archive } from '../Archive';
import { CreateTodo } from '../CreateTodo';
import { DropDown } from '../DropDown';
import { Items } from '../Items';
import { Search } from '../Search';
import { Time } from '../Time';
import classes from '../Home/Home.module.css';

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
  onClickDelete,
  changeValue,
  deleteTodo,
  onClickDoneHandlier,
  onClickAddInArchive,
  onSetItems,
}) => {
  return (
    <div className={[classes.base, `${darkTheme ? classes.darkhome : classes.home}`].join(' ')}>
      <DropDown showArchive={showArchive} changeModalMode={changeModalMode} />
      <Time />
      <Archive showArchive={showArchive} archive={archive} isArchive={isArchive} items={items} onClickArchiveClose={onClickArchiveClose} />

      {modal ? <CreateTodo onClickExit={onClickExit} items={items} setItems={addItems} /> : null}
      <Box idHandlier={idHandlier} />
      <span className={classes.lengthInfo}>You have {init.length} todos</span>
      <br />
      <Search
        items={items}
        onChangeSearchValue={onChangeSearchValue}
        onClickDelete={onClickDelete}
      />
      {items.length > 0 ? (
        <Items
          changeValue={changeValue}
          items={items}
          removeTodo={deleteTodo}
          onClickDoneHandlier={onClickDoneHandlier}
          onSetItems={onSetItems}
          onClickAddInArchive={onClickAddInArchive}
        />
      ) : (
        <div className={classes.info}>
          Application is clear. You need open menu &nbsp;
          <CiMenuBurger />
          &nbsp; and create todo !
        </div>
      )}
    </div>
  );
};
