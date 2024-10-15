import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import "../e-cart/navbar.css"
import axios from 'axios';


export default function Cartnav() {

  const [username, setUsername] = useState("");
  const [count,setCount] = useState("")
  

  useEffect(()=>{

    setUsername(
      localStorage.getItem("username")
    )
  },[]) 

  useEffect(()=>{
    axios.get("http://localhost:3003/cart_list")
    .then((res)=>{
      setCount(res.data.length)
      // console.log(res.data.length)  
  })
  })

  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'>{username || 'Username'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
                       
          <Link to="/home" className='text-white' style={{textDecoration:"none",alignContent:"center"}}>Home</Link>

            <Link style={{textDecoration:"none" , alignContent:"center",color:"black"}} 
            className='cart-count-link' to="/cart">

              <CiShoppingCart  className='cart-icon'/>
              <span className='cart-count'>{count}</span>
              <span className='text-white'>cart</span>
            </Link>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

