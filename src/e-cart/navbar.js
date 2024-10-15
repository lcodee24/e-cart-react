import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiShoppingCart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import "../e-cart/navbar.css"
import axios from 'axios';

export default function Navbarnav({  onSearch , cart_count}) {

  const [username, setUsername] = useState("");
  const [noproduct , setNoproduct] = useState("");
  
  

  const handleChange = async(e) => {
    const searchval = e.target.value;
    onSearch(searchval);  
   
   await axios.get("http://localhost:3002/product_data")
    .then((res)=>
      res.data.filter((obj)=>
        obj.title.toLowerCase().startsWith(searchval.toLowerCase()) || obj.name.toLowerCase().startsWith(searchval.toLowerCase())
      ))
    .then((arr)=>{
      if(arr.length === 0){
            setNoproduct("Product not available.")
      }
      else{
        setNoproduct("")
      }
    })  
  };

  useEffect(()=>{

    setUsername(
      localStorage.getItem("username")
    )

    // localStorage.removeItem("usersearch")
  },[]) 
 
  

  return (
    <Navbar expand="lg" className="bg-black">
      <Container fluid>
        <Navbar.Brand href="#" className='text-white'>{username || 'Username'}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" style={{backgroundColor:"white",borderColor:"gray"}}/>
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px'}}
            navbarScroll
          >

            <Link to="/home" className='text-white' style={{textDecoration:"none",alignContent:"center"}}>Home</Link>

            <Link style={{textDecoration:"none" , alignContent:"center",color:"white"}} 
            className='cart-count-link' to="/cart">

              <CiShoppingCart  className='cart-icon'/>
              <span className='cart-count'>{cart_count}</span>
              <span className='text-white'>cart</span>
            </Link>

            {/* <NavDropdown title="Link1" id="navbarScrollingDropdown" className='text-white'>
              <NavDropdown.Item className='text-white'>Action</NavDropdown.Item>
              <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav> 
          <Form className="d-flex justify-content-center align-items-center w-50">

            <p style={{fontSize:"18px",display:"flex",justifyContent:"center",alignItems:"center",width:"50%",height:"100%"}} className='me-2'>{noproduct}</p>

            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}















// import 'bootstrap/dist/css/bootstrap.css';
// import { useEffect, useState } from 'react';

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// export default function Navbarnav(){

//   const [username,setUsername] = useState("")



//   useEffect(()=>{
//     setUsername(
//       localStorage.getItem("username")
//     )
//     localStorage.removeItem("usersearch")
    
//   },[])  


//   const handlechange = (e)=>{
//     let searchval = e.target.value
//     localStorage.setItem("usersearch", searchval);
//     // console.log(searchval)
//     console.log("search nav : " , localStorage.getItem("usersearch"))
//   }

//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">{username}</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >
//             <Nav.Link href="#action1">Home</Nav.Link>
//             <Nav.Link href="#action2">Link</Nav.Link>
//             <NavDropdown title="Link" id="navbarScrollingDropdown">
//               <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action4">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action5">
//                 Something else here
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Form className="d-flex">
//             <Form.Control
//               type="search"
//               placeholder="Search"
//               className="me-2"
//               aria-label="Search"
//               onChange={handlechange}
//             />
//             <Button variant="outline-success">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
