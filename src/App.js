import React, { Component } from 'react';
import './App.css'
import Blocks from './components/Blocks/Blocks';
class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      
    }
   
  }

  render() {

    return (
    <container className='container'> 
      <Blocks />
    </container>
    );
  }
}

export default App;
