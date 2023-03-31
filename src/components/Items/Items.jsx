import { Component } from "react";
import { Item } from "../Item/Item";


export class Items extends Component {

    render () {
        const {items} = this.props;
        return (
            <div>
                {items?.map((item) => <Item  key={item.id} archive={this.props.archive} changeValue={this.props.changeValue} {...item} removeTodo={this.props.removeTodo} onClickDoneHandlier={this.props.onClickDoneHandlier} onClickAddInArchive={this.props.onClickAddInArchive}/>)}
            </div>
        )
    }
}