import {Component} from 'react';
import { ITEMS } from '../../data';
import { CreateTodo } from '../CreateTodo/CreateTodo';
import { Items } from '../Items/Items';
import { Time } from '../Time/Time';
import classes from '../Home/Home.module.css';

export class Home extends Component {
    constructor() {
        super();
        this.state = {
            items: ITEMS
        }
        // console.log(this.state.items)
    }
    addItems = (title, description) => {
        const newTodo = {
            id: new Date(),
            title: title,
            description: description,  
        }

        console.log(newTodo)
        this.setState({ items: this.state.items.concat(newTodo) })
        // const res = {items: [...this.state.items, newTodo]}
        // this.setState({...res})
    }
    render () {
        const {items} = this.state;
        return (
            <div className={classes.home}>
                <Time/>
                <CreateTodo items={items} setItems={this.addItems}/>
                <Items items={items}/>
            </div>
        )
    }
}
