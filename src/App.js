import {Component} from 'react';
import classes from './App.module.css';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

export class App extends Component {
  constructor() {
    super();
    this.state = { theme: 'light' }
    this.handleClickTheme = this.handleClickTheme.bind(this);
}

componentDidMount(){
    console.log("dggd")
    document.body.setAttribute('data-theme', this.state.theme);
}

handleClickTheme() {
    // e.preventDefault()
    console.log("click")
    this.setState({theme: this.state.theme === 'light' ? 'dark' : 'light'})
    document.body.setAttribute('data-theme', this.state.theme);
}
  // componentDidMount(){
  // document.body.setAttribute('data-theme', 'light')
  // }
  
  render () {

    return (
      <div className={classes.app}>
      <Header theme={this.state.theme} onClick={this.handleClickTheme} />
      <div className={classes.container}>
        <Home />
      </div>
    </div>
  );
}
}

export default App;
