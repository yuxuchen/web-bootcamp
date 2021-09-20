import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.handleUsdChange = this.handleUsdChange.bind(this);
    this.handleRmbChange = this.handleRmbChange.bind(this);
    this.state = {money:'', category: 'u'}
  }

  handleUsdChange(money){
    this.setState({money: money, category: 'u'})
  }
  handleRmbChange(money){
    this.setState({money: money, category: 'r'})
  }

  render(){
    const category = this.state.category;
    const money = this.state.money;
    const usd = category === 'r' ? money/7 : money;
    let rmb = category === 'u' ? money*7 : money;
    if(usd===''){
      rmb='';
    }
    return(
      <div>
        <MoneyInput 
          category = 'USD' money = {usd} change = {this.handleUsdChange}/>
        <MoneyInput 
          category = 'RMB' money = {rmb} change = {this.handleRmbChange}/>
      
      </div>
    )
  }
}

class MoneyInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e){
    this.props.change(e.target.value);
  }
  render(){
    const money = this.props.money;
    const category = this.props.category;
    return(<filedset>
      <legend> Enter money in {category}:</legend>
      <input 
        value = {money} 
        onChange={this.handleChange}
        placeholder = {"enter here"}/>
      </filedset>)
  }
}


export default App;

