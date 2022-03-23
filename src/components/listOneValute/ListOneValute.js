import React, { Component } from 'react'

export default class ListOneValute extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className="list-one-valute">
                <h3>{this.props.code}</h3>

                {
                    this.props.items.map((item, i) => {
                        return (
                            <li
                                key={i}
                                className='list-one-valute__item'>
                                <span>{item.Date}</span>
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
