import { Component } from 'react';

import List from './components/list/List';
import CoursService from './components/services/CoursService';
import ListOneValute from './components/listOneValute/ListOneValute';

import './App.css';
class App extends Component {

  state = {
    listOneValute: [],
    currentCode: ''
  }

  coursService = new CoursService();

  getListValute = async (code) => {
    const listOneValute = [];
    let res = await this.coursService.getAllResource();
    const { Value, Previous} = res.Valute[code];

    const newItem = {
      Date: res.Date,
      Value,
      Previous,

    }
    listOneValute.push(newItem);

    for (let i = 0; i < 9; i++) {
      res = await this.coursService.getItemResorce(res.PreviousURL);
      const { Value, Previous} = res.Valute[code];
      const newItem = {
        Date: res.Date,
        Value,
        Previous,
      }
      listOneValute.push(newItem);
    }
    console.log(res.Valute[code]['Name']);
    this.setState({
      listOneValute,
      currentCode: res.Valute[code]['Name']
    })

  }

  render() {
    return (
      <div className="App">
        <h1>Курсы валют</h1>
        <div className="content">
          <List getListValute={this.getListValute} />
          <ListOneValute 
          code={this.state.currentCode}
          items={this.state.listOneValute} />
        </div>
      </div>
    );
  }
}
export default App;
