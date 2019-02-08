import React, { Component } from "react"
import Select from 'react-select';
import "./LoginItemForm.css"

class LoginItemForm extends Component {
    
    render(){
        return(
            <div className="form-container" style={this.props.isShowingForm ? {"opacity":"1"} : {"opacity" : "0"}}>
                <form onSubmit={this.props.handleFormSubmit}>
                        <Select
                            options={this.props.services}
                            value={this.props.selectedService}
                            onChange={this.props.handleDropdownChange}
                            isSearchable={true}  
                            />
                    <div className="item-detail-wrapper">
                        <span className="label">username:</span> 
                        <input  
                            type="text"
                            required
                            className="edit-input" 
                            name= "sub_username"
                            placeholder="username"
                            onChange={this.props.handleTextChange}
                            value={this.props.sub_username}
                        /><br/>
                        <span className="label">password:</span> 
                        <input  
                            type="text"
                            required
                            className="edit-input" 
                            name= "sub_password"
                            placeholder="password"
                            onChange={this.props.handleTextChange}
                            value={this.props.sub_password}
                        /><br/>
                    </div>
                    <input className="submit-button" type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default LoginItemForm