import {Component} from 'react';
import classes from '../Box/Box.module.css';

export class Box extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
        }
    }

    boxes = ["All", "Active", "Complited"];

    activeHandlier = (i) => {
        this.boxes.map((_, indx) => indx === i 
        ? this.setState({activeIndex: indx}) 
        : null);
        this.props.idHandlier(i);
    };
        

    render () {
        const {activeIndex} = this.state;
        return (
            <div className={classes.wrapper}>
                {this.boxes.map((box, indx) => <div key={box} onClick={() => this.activeHandlier(indx)} className={[classes.item, `${indx === activeIndex ? classes.active : ''}`].join(" ")}>{box}</div>)}
                {/* <div onClick={() => this.activeHandlier()} className={[classes.item, classes.active].join(" ")}>All</div>
                <div className={classes.item}>Active</div>
                <div className={classes.item}>Complited</div>
                <div className={classes.item}>Archive</div> */}
            </div>
        )
    }
}