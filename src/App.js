import { Component } from 'react';
import classes from './App.module.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { ThemeProvider } from './ThemeContext';
import { Routes, Route } from 'react-router-dom';
import { Archive } from './components/Archive/Archive';

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
