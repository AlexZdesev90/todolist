import { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { CiMenuBurger } from 'react-icons/ci';
import { Box } from '../Box';
import { Archive } from '../Archive';
import { CreateTodo } from '../CreateTodo';
import { DropDown } from '../DropDown';
import { Items } from '../Items';
import { Search } from '../Search';
import { Time } from '../Time';
import classes from '../Home/Home.module.css';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: JSON.parse(localStorage.getItem('items') || '[]'),
      init: JSON.parse(localStorage.getItem('init') || '[]'),
      modal: false,
      archive: [],
      showArchive: false,
    };
  }

  addItems = (title, description) => {
    const newTodo = {
      id: new Date(),
      title: title,
      description: description,
      done: false,
      archive: false,
    };
    console.log(this.state.items);
    this.setState({ items: this.state.items ? this.state.items.concat(newTodo) : [] });
    this.setState({ init: this.state.init ? this.state.init.concat(newTodo) : [] });
    localStorage.setItem('items', JSON.stringify([...this.state.items, newTodo]));
    localStorage.setItem('init', JSON.stringify([...this.state.items, newTodo]));
    this.setState({ modal: false });
  };

  deleteTodo = (id) => {
    const newTodos = this.state.items.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(newTodos));
    localStorage.setItem('init', JSON.stringify(newTodos));
    this.setState({ items: newTodos });
    this.setState({ init: newTodos });
  };

  onChangeSearchValue = (value) => {
    const searchedItems = this.state.init.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    this.setState({ items: searchedItems });
  };

  onClickDelete = () => {
    const getInit = JSON.parse(localStorage.getItem('init'));
    this.setState({ items: getInit });
    this.setState({ init: getInit });
  };

  onClickDoneHandlier = (id) => {
    const newItems = this.state.items.map(
      (item) => (item = item.id === id ? { ...item, done: !item.done } : item),
    );
    console.log(newItems);
    this.setState({ init: newItems });
    this.setState({ items: newItems });
    localStorage.setItem('items', JSON.stringify(newItems));
    localStorage.setItem('init', JSON.stringify(newItems));
  };

  changeModalMode = (e) => {
    e.preventDefault();
    this.setState({ modal: !this.state.modal });
  };

  showArchive = (e) => {
    e.preventDefault();
    this.setState({ showArchive: true });
  };

  onClickArchiveClose = () => {
    this.setState({ showArchive: false });
  };

  onClickExit = () => {
    this.setState({ modal: false });
  };

  onSetItems = (value) => {
    this.setState({ items: value });
  };

  idHandlier = (i) => {
    const getInit = JSON.parse(localStorage.getItem('init'));
    switch (i) {
      case 0:
        this.setState({ items: getInit });
        console.log(this.state.items);
        break;
      case 1:
        const filtered = getInit.filter((item) => !item.done);
        this.setState((state) => {
          return { items: (state.items = filtered) };
        });
        break;
      case 2:
        const filteredDone = getInit.filter((item) => item.done);
        this.setState({ items: filteredDone });
        break;
      default:
        return null;
    }
  };

  onClickAddInArchive = (id) => {
    const newItem = this.state.items.map(
      (item) => (item = item.id === id ? { ...item, archive: !item.archive } : item),
    );
    // console.log(newItem)
    const findItem = this.state.items.find((item) => item.id === id);
    this.setState({ items: newItem });
    console.log(findItem);
    this.setState(({ archive }) => {
      return { archive: [...archive, findItem] };
    });
  };

  render() {
    const { items, modal, showArchive, archive, init } = this.state;
    const { darkTheme } = this.context;
    return (
      <div className={[classes.base, `${darkTheme ? classes.darkhome : classes.home}`].join(' ')}>
        <DropDown showArchive={this.showArchive} changeModalMode={this.changeModalMode} />
        <Time />
        {showArchive ? (
          <Archive archive={archive} items={items} onClickArchiveClose={this.onClickArchiveClose} />
        ) : null}
        {modal ? (
          <CreateTodo onClickExit={this.onClickExit} items={items} setItems={this.addItems} />
        ) : null}
        <Box idHandlier={this.idHandlier} />
        <span className={classes.lengthInfo}>You have {init.length} todos</span>
        <br />
        <Search
          items={items}
          onChangeSearchValue={this.onChangeSearchValue}
          onClickDelete={this.onClickDelete}
        />
        {items.length > 0 ? (
          <Items
            archive={archive}
            changeValue={this.changeValue}
            items={items}
            removeTodo={this.deleteTodo}
            onClickDoneHandlier={this.onClickDoneHandlier}
            onSetItems={this.setState}
            onClickAddInArchive={this.onClickAddInArchive}
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
  }
}

Home.contextType = ThemeContext;
