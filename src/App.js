import { Component } from 'react';
import { Spinner } from 'react-bootstrap';

import List from './components/list/List';
import CoursService from './components/services/CoursService';
import ListOneValute from './components/listOneValute/ListOneValute';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    listOneValute: [],
    currentCode: '',
    isListOneValuteLoaded: false,
    isLoad: false
  }

  componentDidMount() {
    this.setState({
      isListOneValuteLoaded: true,
    })
  }

  coursService = new CoursService();

  getListValute = async (code) => {
    this.setState({
      listOneValute: [],
      isLoad: true,
      isListOneValuteLoaded: false
    })
    
    const listOneValute = [];
    let res = await this.coursService.getAllResource();
    const { Value, Previous } = res.Valute[code];

    const newItem = {
      Date: res.Date,
      Value,
      Previous,

    }
    listOneValute.push(newItem);

    for (let i = 0; i < 9; i++) {
      res = await this.coursService.getItemResorce(res.PreviousURL);
      const { Value, Previous } = res.Valute[code];
      const newItem = {
        Date: res.Date,
        Value,
        Previous,
      }
      listOneValute.push(newItem);
    }
    this.setState({
      listOneValute,
      currentName: res.Valute[code]['Name'],
      isListOneValuteLoaded: false,
      isLoad: false,

    })
  }

  render() {
    return (
      <div className="App">
        <h1 className='title'>Курсы валют</h1>
            <div className="content">
              <List
                getListValute={this.getListValute} />
              <ListOneValute
                code={this.state.currentName}
                items={this.state.listOneValute}
                isListOneValuteLoaded={this.state.isListOneValuteLoaded}
                isLoad={this.state.isLoad} />
            </div>
      </div>
    );
  }
}
export default App;
