import {Component} from 'react';
import { ITEMS } from '../../data';
import { Items } from '../Items/Items';

export class Home extends Component {
    
    render () {
        return (
            <div>
                <input/>
                <Items items={ITEMS}/>
            </div>
        )
    }
}
