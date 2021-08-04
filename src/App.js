import "./App.css";
import React from 'react';


class App extends React.Component{
  render(){
    return(
      <div>
        <h1>{this.props.title} - Academy</h1>
      </div>
    );
  }
}
export default App;