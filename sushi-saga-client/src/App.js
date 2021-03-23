/* eslint-disable */
import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiArray: [],
    displayedSushi: [],
    balance: 100,
    arrayOfIndexes: []
  }

  componentDidMount(){
      fetch(API)
        .then(data => data.json())
        .then(sushi => this.setState({displayedSushi: sushi.splice(0, 4), sushiArray: sushi}))
    }
    
  getSushi = () => {
        let n = 4 - this.state.displayedSushi.length
        n <= 4 ? 
        this.setState({displayedSushi: [...this.state.sushiArray.splice(0, n), ...this.state.displayedSushi]})
        :
        null
  }

  eatSushi = (index, price) => {
    price <= this.state.balance ? this.sushiEaten(index, price) : this.sushiNotEaten()
  }

  sushiEaten = (index, price) => {
    this.state.displayedSushi.splice(index, 1)
    this.setState({
          displayedSushi: [...this.state.displayedSushi], 
          balance: this.state.balance - price,
          arrayOfIndexes: [...this.state.arrayOfIndexes, index]
        })
    alert("Yum!")
  }

  sushiNotEaten = () => {
    alert("You have no money!")
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushi={this.state} eatSushi={this.eatSushi} getSushi={this.getSushi}/>
        <Table balance={this.state.balance} arrayOfIndexes={this.state.arrayOfIndexes}/>
      </div>
    );
  }
}

export default App;
