import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel  from 'react-bootstrap/FloatingLabel';
import axios from 'axios';

import "./signup.css"

export default function Signup(){
  const [formdata,setFormdata] = useState({
    user:"",
    email:"",
    password:"",
    re_password:"",
  })

  const [error_user,setError_user] = useState("User")
  const [error_email,setError_email] = useState("name@gmail.com")
  const [error_password,setError_password] = useState("Password")
  const [error_re_password,setError_re_password] = useState("Re-password")
  const [error,setError] = useState("")

  const navigate = useNavigate()

  const handelchange = (e) => {

    const {name,value} = e.target

     setFormdata((prev)=>({
        ...prev,
        [name]:value
     }))
  }

  const handlesubmit = async (e)=>{
  
  e.preventDefault()

  let success = true 
  
  //  console.log(formdata)

  let pw = formdata.password 
  let rpw = formdata.re_password
  let email = formdata.email
  let user = formdata.user


  if(pw !== rpw){
    setError_re_password("Password does not match")
    success = false
 }


  if(pw === ""){
    setError_password("Fill password")
    setError("")
    success = false
  } 
  else{
    setError_password("correct")
  }
  if( rpw === "" ){
    setError_re_password("Fill Re-password")
    setError("")
    success = false
  }
  else if(pw !== rpw){
    setError_re_password("Re-password does not match")
  }
  else{
    setError_re_password("correct")
  }
  if(email === ""){
    setError_email("Fill email")
    setError("")
    success = false
  }
  else{
    setError_email("correct")
  }
  if(user === ""){
    setError_user("Fill user")
    setError("")
    success = false
  }
  else{
    setError_user("correct")
  }


  if(email === "" && user === "" && pw === "" && rpw === ""){
    setError("Fill all fields.")
    setError_re_password("Re-password !")
    setError_password("Password !")
    setError_email("Email !")
    setError_user("User !")
    success = false
  }
    

  const  email_pattern =   /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 


  if(!email_pattern.test(email) && email !== ""){
     setError_user("Correct the email field.")
     success = false 
  }

  await axios.get("http://localhost:3001/data")
  .then((res)=>{
     res.data.map((obj)=>{
         if(obj.email === formdata.email){
          setError_email("Already you have account.")
            success = false
         }
     })
  })

   if(success){
    await axios.post("http://localhost:3001/data",formdata)
    .then(()=>{
     alert("Account created successfully ")
     navigate("/")
    })
    .catch(()=>alert(" error in saving data "))
   }
  }

  return(
    
    <Container style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <form style={{width:"30vw",height:"96%"}} onSubmit = {handlesubmit}>  

      <h4 style={{textAlign:"center"}}>Sign-up</h4>  
      
        <p>{error}</p>

        <FloatingLabel controlId="floatingName" label={error_user} className="custom-floating-label mb-3 mt-4">
          <Form.Control type="text" placeholder={error_user} className="custom-input" name="user" onChange={handelchange} value={formdata.user}/>
        </FloatingLabel>

        {/* <p>{error_user}</p>       */}

        <FloatingLabel controlId="floatingEmail" label={error_email} className="mb-3 mt-4 custom-floating-label">
          <Form.Control type="email" placeholder={error_email} className="custom-input" name="email"   onChange={handelchange} value={formdata.email}/>
        </FloatingLabel>

        {/* <p>{error_email}</p> */}

        <FloatingLabel controlId="floatingPassword" label={error_password} className="custom-floating-label mb-3 mt-4">
          <Form.Control type="password" placeholder={error_password} className="custom-input" name="password"   onChange={handelchange} value={formdata.password}/>
        </FloatingLabel>

        {/* <p>{error_password}</p> */}
      
        <FloatingLabel controlId="floatingPassword" label={error_re_password} className="custom-floating-label mb-3 mt-4">
          <Form.Control type="password" placeholder={error_re_password} className="custom-input" name="re_password"   onChange={handelchange} value={formdata.re_password}/>
        </FloatingLabel>

        {/* <p>{error_re_password}</p> */}

        <div style={{width:"100%",height:"20%",display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}>
        <button type="submit">Submit</button>

        <Link to="/" className="">Already have a account </Link>
        </div>

      </form>
    </Container>
  )
}
