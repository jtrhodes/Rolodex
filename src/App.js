import logo from './logo.svg';
import './App.css';
import React,{Component} from "react";

class App extends Component{
    constructor() {
        super();
        this.state = {
            string:'Hello Johnnyboy'
        }
    }
    render(){
      return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>{this.state.string}</p>
                <button onClick={()=> this.setState({string:"Heyo boyy!"})}>Change Text</button>
            </header>
          </div>
      );
    }
}

export default App;
