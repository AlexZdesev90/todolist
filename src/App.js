import classes from './App.module.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <div className={classes.container}>
        <Home />
      </div>
    </div>
  );
}

export default App;
