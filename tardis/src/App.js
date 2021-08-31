import React, { Component } from 'react';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';

class App extends Component {
  state = {
    tardis: {
      name: 'Time and Relative Dimension in Space',
      caps: false,
    }
  }

  changeIt = (text) =>{
    if (this.state.tardis.caps) {
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

  render() {
    return (
      <div>
        <h3 onClick={this.changeIt}>{this.state.tardis.name}</h3>
        <FirstComponent />
        <SecondComponent />
        <ThirdComponent />
      </div>
    );
  }
}

export default App;