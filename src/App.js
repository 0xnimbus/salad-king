import './App.css';

import {Component} from 'react'
import Nav from './components/Nav.jsx'
import Spice from './components/Spice.jsx'


class App extends Component {

  state = {
    spice: '1'
  }

  addOne= () => {
    let temp = (this.state.spice * 1) + 1 
    this.setState({spice: temp})
  }

  minusOne = () => {
    let temp = (this.state.spice * 1) - 1 
    this.setState({spice: temp})
  }

  render() {
    return (
      <div> 
      
        <Nav/> 
        <button onClick={this.addOne}>Add Some Heat</button>
        <button onClick={this.minusOne}>Cool It Off</button>

        <h1> Spice Level: {this.state.spice} </h1>
        <Spice spice={this.state.spice}/> 
      
      </div>
    )
  }
}

export default App;
