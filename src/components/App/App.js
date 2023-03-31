import { Component } from 'react';
import classes from './App.module.css';
// import { Header } from '../Header/Header';
// import { Home } from '../Home/Home';
import { ThemeProvider } from '../../context/ThemeContext';
import { Routes, Route } from 'react-router-dom';
import { Archive } from '../Archive/Archive';
import { Header } from '../Header';
import { Home } from '../Home';

export class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className={classes.app}>
          <Header />
          <div className={classes.container}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/archive" element={<Archive />} />
            </Routes>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
