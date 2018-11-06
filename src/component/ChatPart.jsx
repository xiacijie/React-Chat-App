import socket from "../client/socket";
import React,{Component} from "react";
import {Input,Button,List,Avatar} from "antd";
import moment from "moment";


export default class ChatPart extends Component{
    constructor(props){
        super(props);
        this.state = {
            buffer:"",
            messages:[],
            client:socket()
        };
    }

    componentDidMount(){
        const {client} = this.state;
        client.receiveMessage(this.onReceiveMessage);


    }

    onReceiveMessage =(message) =>{
        const {messages} = this.state;
        const newMessages = messages.slice();
        newMessages.push({description: message.message,name:message.name,time: message.time});
        this.setState({messages:newMessages});


    };

    sendMessage = () =>{
        const {client,buffer} = this.state;
        client.sendMessage({
            message:buffer,
            name:this.props.name,
            time: moment().format("h:mm a")
        });
        this.setState({buffer:""});
    }

    onInputChange = (e) =>{
        this.setState ({buffer:e.target.value});
    }



    render(){

        const {client,messages,buffer} = this.state;
        return (
            <div>
                <div className="messages-area">
                    <List
                        itemLayout="horizontal"
                        dataSource={messages}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.name} {item.time}</a>}
                                    description={item.description}
                                />
                            </List.Item>
                        )}
                    />

                </div>
                <div className="input-area" >
                    <Input onChange={this.onInputChange} value={buffer}/><Button type="primary" onClick={this.sendMessage}>Send</Button>
                </div>
            </div>

            
        );
    }


}