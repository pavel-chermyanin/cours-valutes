import React, { Component } from 'react';

import './listOneValute.css'

export default class ListOneValute extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-one-valute">
                <h2>Курс одной валюты за 10 дней</h2>
                <h3>{this.props.code}</h3>

                {
                    this.props.items.map((item, i) => {
                        const date = new Date(item.Date);

                        return (
                            <li
                                key={i}
                                className='list-one-valute__item'>
                                <span>{date.getFullYear()}-{date.getMonth()}-{date.getDate()}</span>
                                <span>{item.Value}</span>
                                <span>{item.Previous}</span>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
