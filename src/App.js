import React, { Component, Fragment } from 'react';
import Card from './component/Card';
import Navigation from './component/Navigation';
import './App.css'

class App extends Component {

  state = {
    cards: [
      { name: 'Jahn Dae', age: 12, body: 'Lorem ipsum' },
      { name: 'Danny Dom', age: 22, body: 'Pyaj lehsun' },
      { name: 'Marjando', age: 52, body: 'Lorem ipsum' },
      { name: 'Hoshana', age: 15, body: 'Body Full' }
    ]
  }

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <Navigation />
        <hr />
        <br />
        <div className="container">
          <Card name={this.state.cards[0].name} age={this.state.cards[0].age} body={this.state.cards[0].body} />
          <Card name={this.state.cards[1].name} age={this.state.cards[1].age} body={this.state.cards[1].body} />
          <Card name={this.state.cards[2].name} age={this.state.cards[2].age} body={this.state.cards[2].body} />
          <Card name={this.state.cards[3].name} age={this.state.cards[3].age} body={this.state.cards[3].body} />
        </div>
      </Fragment>
    )
  }
}

export default App;