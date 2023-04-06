import { Component } from 'react';
import classes from './App.module.css';
import { ThemeProvider } from '../../context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import { Header } from '../Header';
import {Info} from '../../pages/Info/Info';
import { Home } from '../../pages/Home/Home';

export class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className={classes.app}>
          <Header />
          <div className={classes.container}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/info' element={<Info />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
