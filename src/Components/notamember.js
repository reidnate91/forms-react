import React, { Component } from 'react';

import '../App.css';


class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      terms: false,
      username: '',
      password: '',
      confirmPassword:'',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
  
   
    this.setState({
      [name]: value
    });

  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.username);
    event.preventDefault();
  }
  render() {
    return (
     <div>

    <h1>Login</h1>
      
     
      <form onSubmit={this.handleSubmit}>
      <table>
        <tbody>
      <tr>
        <label>
          
           
          <td><input
          placeholder="Username"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleInputChange} /></td>
           
        </label>
        </tr>
        <tr>
        <label>
          <td><p name="passWord">Password</p></td>
          <td><input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleInputChange} /></td>
        </label>
        </tr>
        <tr>
        <label>
          <td><p>Confirm</p> </td>
          <td><input
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleInputChange} /></td><br/>
            <td><p name="confirm">Password</p></td>
        </label>
        </tr>
        <tr>

        <label>
        
          <td><input
            name="terms"
            type="checkbox"
            checked={this.state.terms}
            onChange={this.handleInputChange} /></td><td>
             Click to agree to Terms and Conditions</td>
        </label>
        </tr>
        <tr>
       <label>
         <td>
       <input name="submit" type="submit" value="Submit" /></td>
       </label>
       </tr>
       
       
        </tbody>
        </table>
      </form>
    
    </div>
    );
    
  }
  
}

  



export default Member