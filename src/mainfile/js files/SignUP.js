import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useHistory } from "react-router-dom";
import './signup.css'

function Signup() {
  const history = useHistory()
  const [form, setform] = useState({
    username: "",
    password: "",
    confirmpassword:""

  })

  const [error, seterror] = useState({
    usernameErr: "",
    passwordErr: "",
    confirmpasswordErr:""
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
      else if(props === "password") {
     
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
      else if(props==="confirmpassword"){
        if(obj[props].trim() == obj["password"]){
          obj1[props + 'Err'] = " "
        }
        else{
          obj1[props + 'Err'] = "check password"
        }
      }
      else{
        obj1[props + 'Err'] = " "
      }

    }
    seterror(obj1)

  }
  
    // e.preventDefault()
    let obj = { ...form };
    let obj1 = {};
    console.log(Object.values(obj1).filter((ele)=> Boolean(ele)));
  function checkBtn(e) {
    for (let props in obj) {
      console.log("hello");
      let emailvalid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-z]+).([a-z]{2,3})$/
      let passwordvalid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\w!@#$%^&]{8,100}$/
     
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
      else if(props === "password") {
     
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
      else if(props==="confirmpassword"){
        if(obj[props].trim() == obj["password"]){
          obj1[props + 'Err'] = " "
          
          
        }
      
        else{
          obj1[props + 'Err'] = "check password"
        }
      }
      if(Object.values(obj1).filter((ele)=> Boolean(ele)).length === 0)
    {
    sessionStorage.setItem("existingUser",JSON.stringify(form))
        history.push("/")
    }else{
      seterror(obj1)
    }

    }

  
  }

  

    return(
      <div className="sign-main">
        <Form className="m-auto" onSubmit={(e)=>{checkBtn(e)}}>
      <Form.Group className="m-auto w-25" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="username" onChange={(e)=>{handle(e)}} />
        <p>{error.usernameErr}</p>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="m-auto mt-3  w-25" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" onChange={(e)=>{handle(e)}} />
        <p>{error.passwordErr}</p>
      </Form.Group>
      <Form.Group className="m-auto mt-3  w-25" controlId="formBasicPassword">
       
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="confirmpassword" onChange={(e)=>{handle(e)}}/>
        <p>{error.confirmpasswordErr}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Accept terms and condition" />
      </Form.Group>
     
      <Button variant="primary" className="m-auto" type="submit"  onChange={(e)=>{checkBtn(e)}}>
        Sign IN
      </Button></Form>
        </div>
    )

    
}


export default Signup