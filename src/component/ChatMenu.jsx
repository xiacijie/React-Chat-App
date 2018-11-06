import React,{Component} from "react";
import {Link} from "react-router-dom";
import {Menu,Icon,Button,Switch} from "antd";
const SubMenu = Menu.SubMenu;

class ChatMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            rooms:["general","random"],
            theme:"dark",
            current:"1"
        };
    }

   


    render(){
        const {rooms} = this.state;
     
        return (
            <div className="chat-menu">
               
                <Menu
                    theme={"dark"}
                    onClick={this.handleClick}
                    defaultOpenKeys={['sub1']}
                    defaultSelectedKeys={["0"]}
                    mode="inline"
                    >
                    <Menu.Item>Hello! {this.props.name}</Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Channel</span></span>}>
                        {rooms.map((val,index) =><Menu.Item onClick={this.props.switch.bind(this,val)} key={index+""}>#{`${val}`}</Menu.Item> )}
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="mail" /><span>Direct Messages</span></span>}>

                    </SubMenu>


                </Menu>

                {/* <ul className="menu">
                    {rooms.map((val) => <li><Link to={`${val}`}>#{val}</Link></li>)}
                </ul> */}
             
            </div>
            
        );
    }
}

export default ChatMenu;