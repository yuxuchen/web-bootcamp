import React from 'react';
import './App.css';

function FancyBorder(props){
    return(
        <div>
            {props.children}
        </div>
    )
}
function Dialog(props){
    return(<FancyBorder>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.message}
        </p>
        {props.children}
    </FancyBorder>)
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSignUp = this.handleSignUp.bind(this);
        this.state = {login:''};
    }
    render(){
        return(
            <Dialog title='Welcome to Mars!' message='How should we call you?'>
                <input value={this.state.login} onChange = {this.handleChange}/>
                <button onClick={this.handleSignUp}>
                    Sign up!
                </button>
            </Dialog>
        )
    }

    handleChange(e){
        this.setState({login: e.target.value});
    }
    handleSignUp(){
        alert(`Welcome to Mars, ${this.state.login}!`)
    }
}


export default App;