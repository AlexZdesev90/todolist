import { Component } from "react";
import classes from '../Item/Item.module.css';
import {motion} from 'framer-motion';
import { RiEditFill, RiDeleteBin3Fill } from "react-icons/ri";
import { GiConfirmed } from "react-icons/gi";
import { MdDoneOutline, MdRemoveDone } from "react-icons/md";
import { TiInfoLarge } from "react-icons/ti";
import { RxArchive } from "react-icons/rx";
import { Button } from "../Button";


export class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            editTitleValue: this.props.title,
            editDescriptionValue: this.props.description,
        }
    }

    onChangeTextValue = (event) => {
        const value = event.target.value;
        this.setState({editTitleValue: value});
    }

    onChangeDescriptionValue = (event) => {
        const value = event.target.value;
        this.setState({editDescriptionValue: value});
    }
    
    
    render () {
        const {id, done, archive} = this.props;
        return (
                <motion.div 
                key={id}
                initial={{x: 100, opacity: 0}} 
                animate={{x: 0, opacity: 1}}
                className={[classes.item, `${done ? classes.doneTrue : ''}`].join(' ')}>
                    {this.state.edit 
                    ? <div className={classes.wrapper}>
                        <input className={classes.input} type="text" value={this.state.editTitleValue} onChange={(e) => this.onChangeTextValue(e)} maxLength={40}/>
                        <input className={classes.input} type="text" value={this.state.editDescriptionValue} onChange={(e) => this.onChangeDescriptionValue(e)} maxLength={40}/>
                    </div> 
                    : (
                    <div className={classes.wrapper}>
                        Title : <span style={{color: "#60606F", fontWeight: "500", textShadow: "1px 1px 1px black"}}>&nbsp;{this.state.editTitleValue}</span>&nbsp;
                        Description : <span style={{color: "#60606F", fontWeight: "500", textShadow: "1px 1px 1px black"}}>&nbsp;{this.state.editDescriptionValue}</span>
                    </div>)}
                    <div className={classes.flexWrapper}>
                        <div><span className={classes.status}>{archive ? "archive" : done ? "completed" : "active"}</span></div>
                        <div>
                            <Button onClick={() => this.props.removeTodo(id)}><RiDeleteBin3Fill/></Button>
                            <Button onClick={() => this.setState({edit: !this.state.edit})} color="yellow">{this.state.edit ? <GiConfirmed/> : <RiEditFill/>}</Button>
                            <Button onClick={() => this.props.onClickDoneHandlier(id)}>{done ? <MdRemoveDone/> : <MdDoneOutline/>}</Button>
                            <Button><TiInfoLarge/></Button>
                            <Button onClick={() => this.props.onClickAddInArchive(id)}><RxArchive /></Button>
                        </div>
                    </div>
                </motion.div>
        )
    }
}