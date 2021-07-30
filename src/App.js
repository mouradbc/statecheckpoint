import './App.css';
import React from "react"
import myphoto from './myphoto.jpg'

class App extends  React.Component{
  state={
    person: {
      name:"XXXX",
      bio:"YYYY",
      imgSrc : myphoto,
      profession : "ZZZZZZ"

    },
    show : false,
    count : 0
  };
  
  render(){
    const showPerson=()=>{
      this.setState(
        {
          show : ! this.state.show
        }
      );
      setInterval(()=>{
        
        this.setState(
          {count : this.state.count + 1}
        )
      },1000);
    }
    return(
      <div className="App">
        <button onClick={showPerson}>show person</button>
          {this.state.show ? (<div className="profile">
          <p>{this.state.person.name}</p>
          <p>{this.state.person.bio}</p>
          
          <img src={this.state.person.imgSrc} alt={this.state.person.name} style={{ width: 100, height: 100 }} />
          <p>{this.state.person.profession}</p>
          <p>interval :{this.state.count}</p>

          </div>) : <div></div>}
          

      </div>
    )
  }
}

export default App;