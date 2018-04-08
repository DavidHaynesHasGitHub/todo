import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import ItemsComponent from './components/ItemComponents'
import './App.css';

class App extends Component {
  state = {
    items: {}
  }
  itemsRef = fire.database().ref('items')
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
  addItem=(e)=> {
    e.preventDefault();
    let items = {
      ...this.state.tiems,
      [new Date().valueOf()]: {
        item: this.todoItem.value,
        completed: false
      }
    }
    this.setState({
      items
    });
  }
  render() {
    return (
      <BrowserRouter>
        <div className="wrap">
          <h2>A simple todo app</h2>
          <ul className="menu">
            <li><Link to={'/'}>To do</Link></li>
            <li><Link to={'/completed'}>Completed</Link></li>
          </ul>
          <Route exact path="/"
              render={props =>
                <ItemsComponent
                  items={this.state.items}
                  done={false}
                  action={this.completeItem}
                  addItem={this.addItem}
                  inputRef={el => this.todoItem = el}
                  />
              }/>
            <Route exact path="/completed"
              render={props =>
                <ItemsComponent
                  items={this.state.items}
                  done={true}
                  action={this.deleteItem}
                  />
              }/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
