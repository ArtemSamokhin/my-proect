import React, { Component } from 'react';
import {FaBan} from "react-icons/fa";

export class Order extends Component {
    render() {
        return (
            <div className='item'>
                <img src={"./img/" + this.props.item.img} alt={this.props.item.description} />
                <h2>{this.props.item.title}</h2>
                <b>{this.props.item.price} &#8381;</b>
                <FaBan className='delete-order' onClick={() => {this.props.onDelete(this.props.item.id)}}/>
            </div>
        )
    }
}

export default Order;