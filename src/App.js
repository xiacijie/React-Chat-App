import React,{Component} from "react";
import {Switch,Route}from "react-router-dom";
import ChatApp from "./component/ChatApp";
import Login from "./component/Login";

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            name :"",
        }
    }

    setName = (e) =>{
        this.setState({name:e.target.value});
    };

    render(){

        return(
            <Switch>
                <Route exact path={"/"} render={() => <Login view={this}/>}/>
                <Route exactx path={"/chat"} render={() => <ChatApp name={this.state.name}/>}/>
            </Switch>
        );
    }
}