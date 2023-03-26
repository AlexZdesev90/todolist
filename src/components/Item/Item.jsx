import { Component } from "react";

export class Item extends Component {
    render () {
        const {title, description} = this.props;
        return (
            <div>
                {title}
                <br/>
                {description}
                <button>X</button>
                <hr/>
            </div>
        )
    }
}