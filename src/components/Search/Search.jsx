import { Component } from "react";
import { SearchRender } from './SearchRender';

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
        const {searchValue} = this.state;
        return (
            <SearchRender searchValue={searchValue} onHandlier={this.onHandlier} onClickHandlier={this.onClickHandlier}/>
        )
    }
}