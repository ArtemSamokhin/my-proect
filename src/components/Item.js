import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src={"./img/" + this.props.item.img} alt={this.props.item.description} onClick={() => this.props.onShowItem(this.props.item)} />
        <h2>{this.props.item.title}</h2>
        <p>{this.props.item.description}</p>
        <b>{this.props.item.price} &#8381;</b>
        <div className='add-to-card' onClick={() => this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default Item