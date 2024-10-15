import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Form from 'react-bootstrap/Form';
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

export default function Signin(){
   
  const [user,setUser] = useState({

    email :"",
    password:""
  })

  const [data,setData] = useState("")

  const [ error , setError ] = useState("")

  const navigate = useNavigate()

 const handleuser = (e)=>{
  
      const {name,value} = e.target
      setUser((prev)=>({
         ...prev,
         [name] : value
      }))
  }

  const handlesubmit = (e)=>{
    e.preventDefault()
    // console.log(user)

    
    if(user.email && user.password){
      axios.get("http://localhost:3001/data")
      .then((res)=>{
        setData(res.data)
        // alert("Date is get")
        const matched_user = res.data.filter((obj)=>
           obj.email === user.email && obj.password === user.password
        )
        if(matched_user[0]){
          navigate("/home")
          localStorage.setItem("username",matched_user[0].user)
        }
        else{
          setError("Error in email or password.")
        }
      })
      .catch(()=>{alert("Data is not get")})
    
    }
     
    // console.log(data)

  }
 
  return(

    <Container style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>

    <form style={{width:"30vw",height:"96%"}} onSubmit={handlesubmit}>  
  
    <h4 style={{textAlign:"center"}}>Sign-in</h4>  

    <p>{error}</p>

    <Form.Control size="lg" type="text" placeholder="Email"  className="mb-4" onChange={handleuser} name="email"/>  

    <Form.Control size="lg" type="password" placeholder="Password" onChange={handleuser} name="password" />  

    <div style={{width:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}} className="mt-4" >
      <button type="submit" className="rounded-2 mb-4" >Submit</button>
      <Link to="/signup">Don't have an account </Link>
    </div>

    </form>
  </Container>
  )
}


