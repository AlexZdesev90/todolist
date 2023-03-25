import { Component } from "react";

export class Item extends Component {
    render () {
        const {title} = this.props;
        return (
            <div>
                {title}
                <button>X</button>
            </div>
        )
    }
}