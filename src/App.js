import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ItemsComponent from './components/ItemComponent'
import './App.css';

class App extends Component {
  state = {
    items: {
      1123: {
        item: 'item one',
        completed: false
      },
      2564321: {
        item: 'item two',
        completed: true
      }
    }
  }
  completeItem=(id)=>{
    let items = {
      ...this.state.items,
      [id]: {...this.state.items[id], completed: true}
    }
    this.setState({ items })
  }
  deleteItem = (id) => {
    let {[id]: deleted, ...items} = this.state.items;
    this.setState({ items })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="wrap">
          <h2>A simple todo app</h2>
          <ul className="menu">
            <li><Link to={'/'}>To do</Link></li>
            <li><Link to={'/completed'}>Completed</link></li>
          </ul>
          <Route exact path='/'
            render={props =>{
              <ItemsComponent items={this.state.items} done={false}/>
          } />
        <Route exact path='/completed'
          render{props => {
            render={props =>{
              <ItemsComponent items={this.state.items} done={true}/>
          } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
