import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cartnav from "./cart_navbar";

export default function Cart() {

   const [cart,setCart] = useState([])
  
  useEffect(()=>{
      axios.get("http://localhost:3003/cart_list")
      .then((res)=>
          // console.log("cart comp :" , res.data)  
          setCart(res.data)
      )
      .catch(()=>{
        alert("error ...")
      })
  })


  const handleremove = (obj)=>{
     console.log(obj.id)
      axios.delete(`http://localhost:3003/cart_list/${obj.id}`)
      .then((res)=>{
        console.log(res)
      })
      .catch(()=>{
        console.log("error delete")
      })
  }

  if(cart.length === 0){
    return(
     <>
        <Cartnav/>
        <div className="container mt-5 p-5 bg-light border rounded-3">
          <h1 className="display-4">Your cart is empty</h1>
          <br />
          <Link to="/home" className="btn btn-primary btn-lg" href="#" role="button">
          Add anything to cart...
          </Link>
        </div>
     </>
    )
  }

  return(
    <>
        <Cartnav/>
    <div
    style={{
      width: "95vw",
      height: "auto",
      display: "flex",
      marginTop: "20px",
      flexWrap: "wrap",
    }}
    >
        {cart.map((obj,index)=>
              <Card key={index} style={{ width: "300px", height: "auto", marginBottom: "20px",marginLeft:"60px", }}>
              <Card.Img variant="top" src={obj.img} style={{ width: "100%", height: "200px" }} />
              <Card.Body>
                <Card.Title style={{ fontStyle: "italic", textAlign: "center" }}>
                  {obj.title}
                </Card.Title>
                <Card.Text className="fs-5 text-bg-info">
                  Ratings : {obj.ratings}
                </Card.Text>
                <Card.Text className="fs-5 text-danger">
                  Offer Price : {obj.offer}
                </Card.Text>
                <Card.Text className="fs-5 text-warning">
                  Original Price : {obj.orginalPrize}
                </Card.Text>
                <div className="d-flex justify-content-between">
                      <Button variant="primary" className="mx-2">Buy</Button>
                      <Button variant="primary" className="mx-2" onClick={()=>{
                        handleremove(
                          {
                           id:obj.id
                          }
                       )}
                      }>Remove</Button>
                </div>                 
              </Card.Body>
            </Card>
        )}
    </div>
    </>
  )

}

// "id": "bebd",
//       "img": "https://images.meesho.com/images/products/201647353/l0zen_400.webp",
//       "title": "shirt",
//       "offer": 499,
//       "Originalprice": 999

