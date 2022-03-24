import React from 'react'
import { Spinner } from 'react-bootstrap';
import ListItem from '../list-item/ListItem';
import CoursService from '../services/CoursService';

import 'bootstrap/dist/css/bootstrap.min.css';
import './list.css'

class List extends React.Component {

    state = {
        islistLoaded: false,
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
        this.setState({ 
            list: data.Valute,
            islistLoaded: true,
         })
    }

    render() {
        return (
            this.state.islistLoaded ? (
                <ul className="list">
                    {Object.values(this.state.list).map(item => {
                        return <ListItem
                            key={item.ID}
                            getListValute={this.props.getListValute}
                            {...item} />
                    })}
                </ul>
            ) : (
                <div className="list__spinner">
                        <Spinner
                            className='list-one-valute__spinner'
                            animation="border"
                            role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                </div>
                    
            )
            
        )
    }

}

export default List