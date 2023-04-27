import React from 'react';
import ReactDOM from 'react-dom/client';
// import axios from 'axios'
class Car extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count:0     
    };
    // this.calculatetotalmarks=this.handleinputchange.bind(this)
    // this.handleinputchange=this.handleinputchange.bind(this)
  }
  myComponentstyle={
    background:"green",
    align:"center",
    border: "none",
    color: "red",
    padding: "20px",
    display: "inline-block",
    fontsize: "16px",
    margin: "4px 2px",
    cursor: "pointer",
    borderRadius:"60%",
    // fontsize:"20px",
    fontSize:"32px"
  }
  increment=()=>{
    var temp=this.state.count;
    this.setState({count:temp+=1});
    document.getElementById("count").innerHTML=this.state.count;

  
    // document.getElementById("total").innerHTML="Total: "+this.state.total;
  }
  decrement=()=>{
    var temp=this.state.count;
    this.setState({count:temp-=1});
    document.getElementById("count").innerHTML=this.state.count;
  }
  render() {
    return (
      <div>
          <h1 id="count" >{this.state.count}</h1>
          <button onClick={this.increment} style={this.myComponentstyle}>+</button>
          <button onClick={this.decrement} style={this.myComponentstyle}>-</button>
          <h1 id="wea"></h1>
        <h1 id="res"></h1>
        <h1 id="total"></h1>
      </div>
    );
  }
}
export default Car;
