import { Component } from "react";
import classes from '../DropDown/DropDown.module.css';
import { CiMenuBurger } from "react-icons/ci";
import { CgAddR } from "react-icons/cg";
import { RxArchive } from "react-icons/rx";
import { Link } from 'react-router-dom';

export class DropDown extends Component {

    render () {
        return (
            <div className={classes.dropdown}>
                <span className={classes.label}> <CiMenuBurger /></span>
                <ul className={classes.ul}>
                    <li onClick={(e) => this.props.changeModalMode(e)}><i className={classes.current}></i><a className={classes.link} href="/"><CgAddR/>&nbsp;Add todo</a></li>
                    <li onClick={(e) => this.props.showArchive(e)}><i className={classes.current}></i><Link className={classes.link} to="/archive"><RxArchive/>&nbsp;Archive</Link></li>
                    <li><i className={classes.current}></i><a className={classes.link} href="">icon3</a></li>
                </ul>
            </div>
        )
    }
}