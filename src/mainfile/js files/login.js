import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Route, Router, Switch } from "react-router-dom";
import './login.css'
import Signup from "./SignUP";
import { useHistory } from "react-router-dom";




function LoginForm() {
  const history = useHistory()
  const [form, setform] = useState({
    username: "",
    password: ""

  })

  const [error, seterror] = useState({
    usernameErr: "",
    passwordErr: ""


  })


  function handle(e) {
    let obj = { ...form };
    obj[e.target.name] = e.target.value
    setform(obj)
    console.log(obj);
    let obj1 = {};
    for (let props in obj) {
      console.log("hello");
      let emailvalid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-z]+).([a-z]{2,3})$/
      let passwordvalid = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&])[\w!@#$%^&]{8,100}$/
      if (props == "username") {
        if (form[props].trim().length === 0) {
          obj1[props + 'Err'] = "please enter"
        }
        if(emailvalid.test(form[props]) === false){
          obj1[props + 'Err'] = "Invalid Email"
        }
        else {
          obj1[props + 'Err'] = ""
        }
      }
      else  {
        if (form[props].trim().length === 0) {
          obj1[props + 'Err'] = "Invalid password"
        }
        if(passwordvalid.test(form[props])=== false){
          obj1[props + 'Err'] = "Invalid password"
        }
        else {
          obj1[props + 'Err'] = ""
          
        }
      }
      

    }
    seterror(obj1)

  }

  function checkBtn(e) {
    e.preventDefault()
    let obj = { ...form };
    
    let obj1 = {};
    for (let props in obj) {
      console.log("hello");
      let emailvalid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-z]+).([a-z]{2,3})$/
      let passwordvalid = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&])[\w!@#$%^&]{8,100}$/
      if (props == "username") {
        if (form[props].trim().length === 0) {
          obj1[props + 'Err'] = "please enter"
        }
        if(emailvalid.test(form[props]) === false){
          obj1[props + 'Err'] = "Invalid Email"
        }
        else {
          obj1[props + 'Err'] = ""
          history.push("/home")
        }
      }
      else {
        if (form[props].trim().length === 0) {
          obj1[props + 'Err'] = "Invalid password"
        }
        if(passwordvalid.test(form[props])){
          obj1[props + 'Err'] = ""
          
        }
        else {
          
          obj1[props + 'Err'] = "Invalid password"
        }
      }

    }
    seterror(obj1)
  }




  return (
    <div className="form-main">
      <Form className="m-auto">
        <Form.Group className="m-auto w-25" controlId="formBasicEmail">
          <Form.Label className="p-login">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name="username" onChange={(e) => { handle(e) }} />
          <p className="p-login">{error.usernameErr}</p>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="m-auto mt-3  w-25" controlId="formBasicPassword">
          <Form.Label className="p-login">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name="password" onChange={(e) => { handle(e) }} />
          <p className="p-login">{error.passwordErr}</p>
        </Form.Group>

        <button  className="login-btn" type="submit" onClick={(e) => { checkBtn(e) }} >
          Submit
          </button>
        
        
        <p>New to XYZ? <Link to='/signin'> Create New Account </Link></p>
            
         
          
      </Form></div>

  )
}

export default LoginForm