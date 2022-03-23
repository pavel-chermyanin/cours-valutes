import React, { Component } from 'react';
import './list-item.css'

export default class ListItem extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const procent = (((parseFloat(this.props.Value) - this.props.Previous) / ((parseFloat(this.props.Value) + this.props.Previous) / 2)) * 100).toFixed(2)
    return (
      <li
        onClick={() => this.props.getListValute(this.props.CharCode)}
        className='list-item'>
        <span
          className='item-name'>
          {this.props.Name}
        </span>
        <span>{this.props.CharCode}</span>
        <span>{this.props.Value.toFixed(2)} ₽</span>
        <span style={{
          'color': procent > 0 ? 'rgb(84, 216, 84)' : 'red'
        }}>{procent} %</span>
      </li>
    )
  }
}
