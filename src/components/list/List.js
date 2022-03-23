import { render } from '@testing-library/react';
import React from 'react'
import ListItem from '../list-item/ListItem';
import CoursService from '../services/CoursService';

import './list.css'


class List extends React.Component {

    state = {
        list: []
    }
    courceService = new CoursService();

    componentDidMount() {
        this.onRequest()
    }

    onRequest() {
        this.courceService.getAllResource()
            .then(this.onCharListLoaded)
    }

    onCharListLoaded = (data) => {
        this.setState({ list: data.Valute })
    }

    render() {
        return (
            <ul className="list">
                {Object.values(this.state.list).map(item => {
                    return <ListItem
                        key={item.ID}
                        getListValute={this.props.getListValute}
                        {...item} />
                })}
            </ul>
        )
    }

}

export default List