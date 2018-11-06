import React,{Component} from "react";
import { Card, Icon, Avatar, Input,Button } from 'antd';
import {Link} from "react-router-dom";
const { Meta } = Card;



export default class Login extends Component{
    constructor(props){
        super(props);

    }

    render(){
        const page_style = {
            backgroundColor:"#001529",
            height:"100%",
            width:"100%"


        };

        const area_style = {
            width: "100%",
            height: "100%",
            backgroundColor: "white"
        };

        const card_style = {
            textAlign:"center",
          width:350,
          marginLeft:"auto",
          marginRight:"auto",
          marginTop:0,
          marginBottom:0,
            position: "absolute",
            top: "50%",
            left: "50%",

            transform: "translate(-50%, -50%)"
        };

        const button_style = {

            marginTop:"20px",
            width:"80px",
            height:"35px",
            fontSize:"20px",
            backgroundColor:"#001529"

        };



        return (
            <div className="login-page" style={page_style} >

                    <Card
                        style={card_style}
                        cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                    >
                        <Meta
                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={<Input value={this.props.view.state.name} onChange={this.props.view.setName}/>}
                            description="Enter your name"
                        />

                        {
                            this.props.view.state.name === "" ? <Button type="primary" style={button_style}> Start!</Button>
                                : <Link to="/chat"><Button type="primary" style={button_style}> Start!</Button></Link>
                        }




                    </Card>,

            </div>
        );
    }

}