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
                    <SubMenu key="sub1" title={<span><Icon type="appstore" /><span>Channel</span></span>}>
                        {rooms.map((val,index) =><Menu.Item key={index+""}>#{`${val}`}</Menu.Item> )}
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="mail" /><span>Direct Messages</span></span>}>
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
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