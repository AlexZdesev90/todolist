import React, {Component} from 'react';

const ThemeContext = React.createContext();

export class ThemeProvider extends Component {
    constructor(props){
        super(props)
        this.state = {
            darkTheme: true,
        }
    }

    changeTheme = () => {
        this.setState({darkTheme: !this.state.darkTheme})
    }

    render(){
        const {darkTheme} = this.state;
        const {changeTheme} = this;

        return (
            <ThemeContext.Provider value={{
                darkTheme,
                changeTheme,
            }}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
export default ThemeContext;