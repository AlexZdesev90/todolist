import { Component } from "react";
import { Item } from "../Item/Item";

export class Items extends Component {

    render () {
        const {items} = this.props;
        return (
            <div>
                {items.map((item) => <Item key={item.id} title={item.title} description={item.description}/>)}
            </div>
        )
    }
}