import React, { Component } from 'react';
import ToDoItems from "./components/todoitems/ToDoItems";
import AddItems from "./components/additems/AddItems";
import './App.css'
class App extends Component {

  // this is Data
  state = {
    items: [
   
    ]
  }

  // delete items

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({ items })
  }

// ADD Items
   additems = (item) => {
    item.id = Math.random() 
    let items = this.state.items
    items.push(item)
    this.setState(items)
   }



  render() {
    return (
      <div className='app'>
        <h2>To Do List</h2>
        <ToDoItems items={this.state.items}  deleteItem={this.deleteItem} />
        <AddItems  additems={this.additems}/>
      </div>

    )
  }
}

export default App