import { Component } from "react";
import classes from '../Archive/Archive.module.css';

export class Archive extends Component {

    // getItems = () => {
    //     console.log(this.props.items)
    //     return this.props.a.filter(item => item.archive === true)
    // }
   
    // archived = this.getItems()
    render () {
        console.log(this.props.archive)
        return (
            <div onClick={this.props.onClickArchiveClose} className={classes.box}>
                <div className={classes.content}>
                    {this.props.archive?.map(arch => <div key={arch.title}>{arch.title}</div>)}
                    gdgdgdfgd
                </div>
            </div>
        )
    }
}