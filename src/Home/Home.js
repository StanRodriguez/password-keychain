import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import LoginInfoList from "../LoginInfoList/LoginInfoList.js"
import CreateLoginInfoItem from "../CreateLoginInfoItem/CreateLoginInfoItem.js"
import "./Home.css"

class Home extends Component {
    constructor(){
        super()
        this.state={
            isDisplay: false
        }
    }

    componentDidMount(){
        setTimeout(() => {this.setState({isDisplay: true})}, 1)
    }

    render(){
        if (this.props.isSignedIn === false) {
            return <Redirect to="/" />
          }
        return(
            <div className="home-display" style={this.state.isDisplay ? {"opacity": "1",} : {"opacity": "0",}}>
                <h1>Welcome {this.props.userLoginInfo.user.first_name}</h1>
                <CreateLoginInfoItem userId={this.props.userLoginInfo.user.id} refresh={this.props.refresh}/>
                <LoginInfoList userLoginInfo={this.props.userLoginInfo.services}/>
            </div>
            
            
        )
    }
}

export default Home