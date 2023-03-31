import { Component } from "react";
import { BsSearch } from "react-icons/bs";
import { TfiClose } from "react-icons/tfi";
import classes from '../Search/Search.module.css';

export class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
        }
    }
    onHandlier = (e) => {
        const value = e.target.value;
        this.props.onChangeSearchValue(value);
        this.setState({searchValue: value})
    }
    onClickHandlier = () => {
    this.setState({searchValue: ''});
    this.props.onClickDelete()
    }
    render () {
        return (
            <div className={classes.container}>
                <div className={classes.row}>
                    <input type="text" value={this.state.searchValue} onChange={(e) => this.onHandlier(e)} className={classes.input}/>
                    <div onClick={this.onClickHandlier} className={classes.icon}>
                        <BsSearch className={classes.i}/>
                        <TfiClose className={classes.ix}/>
                    </div>
                </div>
            </div>
        )
    }
}