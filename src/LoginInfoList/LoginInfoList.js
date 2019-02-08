import React from 'react'
import LoginInfoItem from '../LoginInfoItem/LoginInfoItem.js'
import './LoginInfoList.css'

const LoginInfoList = (props) => {
    let userLoginInfo = props.userLoginInfo
    const loginInfoItems = userLoginInfo ?
        userLoginInfo.map((item,index) => 
            <LoginInfoItem key={index} item={item}/>
        ) : "Retrieving your user data."
    return(
        <div className="item-list">
            {loginInfoItems}
        </div>
    )
}

export default LoginInfoList