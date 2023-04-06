import { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';
import { HomeRender } from './HomeRender';
import debounce from 'lodash.debounce';

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      items: JSON.parse(localStorage.getItem('items') || '[]'),
      init: JSON.parse(localStorage.getItem('init') || '[]'),
      modal: false,
      archive: JSON.parse(localStorage.getItem('archive') || '[]'),
      isArchive: false,
    };
  }

  addItems = (title, description) => {
    if (title.length <= 2) return;
    const newTodo = {
      id: new Date(),
      title: title,
      description: description,
      done: false,
      date: new Date(),
    };
    this.setState({ items: this.state.items.concat(newTodo) });
    this.setState({ init: this.state.init.concat(newTodo) });
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

  onChangeSearchValue = debounce((value) => {
    const searchedItems = this.state.init.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase()),
    );
    this.setState({ items: searchedItems });
  }, 500);

  onClickSearchDelete = () => {
    const getInit = JSON.parse(localStorage.getItem('init'));
    this.setState({ items: getInit });
    this.setState({ init: getInit });
  };

  onClickDoneHandlier = (id) => {
    const newItems = this.state.items.map(
      (item) => (item = item.id === id ? { ...item, done: !item.done } : item),
    );
    this.setState({ init: newItems });
    this.setState({ items: newItems });
    localStorage.setItem('items', JSON.stringify(newItems));
    localStorage.setItem('init', JSON.stringify(newItems));
  };

  onChangeArchive = (value) => {
    this.setState({ archive: value });
  };

  changeModalMode = (e) => {
    e.preventDefault();
    this.setState({ modal: !this.state.modal });
  };

  showArchive = (e) => {
    e.preventDefault();
    this.setState({ isArchive: true });
  };

  onClickArchiveClose = () => {
    this.setState({ isArchive: false });
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
    const findItem = this.state.items.find((item) => item.id === id);
    localStorage.setItem('archive', JSON.stringify([...this.state.archive, findItem]));
    this.setState({ archive: [...this.state.archive, findItem] });
    const foundElement = this.state.items.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(foundElement));
    localStorage.setItem('init', JSON.stringify(foundElement));
    this.setState({ items: foundElement });
    this.setState({ init: foundElement });
  };

  render() {
    const { darkTheme } = this.context;
    return (
      <HomeRender
        {...this.state}
        darkTheme={darkTheme}
        showArchive={this.showArchive}
        onClickArchiveClose={this.onClickArchiveClose}
        onClickExit={this.onClickExit}
        addItems={this.addItems}
        idHandlier={this.idHandlier}
        changeModalMode={this.changeModalMode}
        onChangeSearchValue={this.onChangeSearchValue}
        onClickSearchDelete={this.onClickSearchDelete}
        changeValue={this.changeValue}
        deleteTodo={this.deleteTodo}
        onClickDoneHandlier={this.onClickDoneHandlier}
        onClickAddInArchive={this.onClickAddInArchive}
        onSetItems={this.setState}
        onChangeArchive={this.onChangeArchive}
      />
    );
  }
}

Home.contextType = ThemeContext;
