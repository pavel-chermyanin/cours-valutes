import React, { Component } from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './listOneValute.css'

export default class ListOneValute extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <ul className="list-one-valute">
                <h2 className='list-one-valute__title'>Курс одной валюты за 10 дней</h2>
                {
                    !this.props.isLoad ? (
                        <h3 className='list-one-valute__name'>{this.props.code}</h3>
                    ) : null
                }
                {
                    this.props.isListOneValuteLoaded ? 'Выберите валюту' : null
                }
                {
                    this.props.isLoad ? (
                        <Spinner
                            className='list-one-valute__spinner'
                            animation="border"
                            role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    ) : null
                }
                {
                    this.props.items.map((item, i) => {
                        const date = new Date(item.Date);

                        const getProcent = (item) => {
                            return (((parseFloat(item.Value) - item.Previous) / ((parseFloat(item.Value) + item.Previous) / 2)) * 100).toFixed(2)
                        }

                        const procent = +getProcent(item);

                        return (
                            <li
                                key={i}
                                className='list-one-valute__item'>
                                <span>{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</span>
                                <span>{item.Value.toFixed(2)} ₽</span>
                                <span
                                    className='list-one-valute__item-procent'
                                    style={{ 'color': procent > 0 ? 'rgb(84, 216, 84)' : 'red' }}>{procent}
                                    <span >%</span>
                                </span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
