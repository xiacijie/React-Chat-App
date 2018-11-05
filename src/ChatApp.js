import React, { Component } from 'react';
import './App.css';
import socket from "./client/socket";
import {Link} from "react-router-dom";
import ChatMenu from "./component/ChatMenu";
import {Button, Row,Col} from "antd";


class ChatApp extends Component {
  constructor(props){
    super(props);
    this.state ={
      client:socket(),
      message:"",
      receive:"",
      
    }
  }
  componentDidMount = () =>{
    const {client} = this.state;
    client.receiveMessage(this.onReceiveMessage);

    
  }
  onReceiveMessage = (receive) =>{
    this.setState({receive});
  }

  onMessageInputChange = (event) =>{
    this.setState({message:event.target.value});
    console.log(event.target.value);
  }

  sendMessage = () =>{
    const {client,message} = this.state;
    client.sendMessage(message);
  }
  render() {
    const {rooms} = this.state;

    return (
      <Row className="app-row">
        <Col className="menu-area" span={4}>
          <ChatMenu/>
        </Col>

        <Col className="chat-area" span={20}>
       
        </Col>

        
        
      </Row>
      
    );
  }
}

export default ChatApp;
