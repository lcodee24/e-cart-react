import { useEffect, useState } from "react";
import Navbarnav from "./navbar";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LiaCartPlusSolid } from "react-icons/lia";


export default function Home(){
  const [product, setProduct] = useState([]);
  const [searchproduct, setSearchproduct] = useState("");  
  const [cart_count , setCartcount ] = useState()

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3002/product_data")
        .then((res) => {
          setProduct(res.data);
        });
    }, 500);
  }, []);

  const handleSearch = (searchVal) => {
    setSearchproduct(searchVal);     
  };



 useEffect(()=>{
  // localStorage.setItem("cartcount" , 0) // --> reset to 0
  // const initialcount = localStorage.getItem("cartcount")
  // setCartcount(initialcount)

  axios.get("http://localhost:3003/cart_list")
    .then((res)=>{
      setCartcount(res.data.length)
      // console.log(res.data.length)  
  })
 },[])
  


  const handlecount = (add_cart_obj) =>{

    // let count = localStorage.getItem("cartcount") 

    // if(count !== null){
    //    setCartcount(count) 
    // }

    // count  = count ? Number(count) : 0

    // let newcount  = count + 1

    // localStorage.setItem("cartcount",newcount)
    // console.log("Cart Count:", newcount);

    // setCartcount(newcount)
        
    axios.get("http://localhost:3003/cart_list")
    .then((res)=>{
      setCartcount(res.data.length)
      // console.log(res.data.length)  
  })


    axios.post("http://localhost:3003/cart_list",add_cart_obj) 
  }
 
  const filteredProducts = searchproduct
    ? product.filter((obj) =>
        obj.title.toLowerCase().startsWith(searchproduct.toLowerCase()) || obj.name.toLowerCase().startsWith(searchproduct.toLowerCase())
      )
    : product;

  return (
    <div className="App">

  <Navbarnav onSearch={handleSearch}  cart_count={cart_count} /> 

      <div
        style={{
          width: "95vw",
          height: "auto",
          display: "flex",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >

        {filteredProducts.length > 0 ? (
          filteredProducts.map((obj, index) => (
            <Card key={index} style={{ width: "300px", height: "auto", marginBottom: "20px",marginLeft:"60px", }}>
              <Card.Img variant="top" src={obj.image} style={{ width: "100%", height: "200px" }} />
              <Card.Body>
                <Card.Title style={{ fontStyle: "italic", textAlign: "center" }}>
                  {obj.title}
                </Card.Title>
                <Card.Text className="fs-5 text-bg-info">
                  Ratings : {obj.ratings}
                </Card.Text>
                <Card.Text className="fs-5 text-danger">
                  Offer Price : {obj.offerprice}
                </Card.Text>
                <Card.Text className="fs-5 text-warning">
                  Original Price : {obj.orginalPrize}
                </Card.Text>
                <div className="d-flex justify-content-between">
                      <Button variant="primary" className="mx-2">Buy</Button>
                      <Button variant="primary" className="mx-2" onClick={()=>{
                        handlecount({
                          img:obj.image,
                          title:obj.title,
                          rating:obj.rating,
                          offer:obj.offerprice,
                          Originalprice : obj.orginalPrize
                        })
                      }} ><LiaCartPlusSolid className="cart-icon-add"/> Add</Button> 
                </div>                
              </Card.Body>
            </Card>
          ))
        ) : (
           
          <>
            {product.map((obj,index)=>
                <Card key={index} style={{ width: "300px", height: "auto", marginBottom: "20px",marginLeft:"60px", }}>
                <Card.Img variant="top" src={obj.image} style={{ width: "100%", height: "200px" }} />
                <Card.Body>
                  <Card.Title style={{ fontStyle: "italic", textAlign: "center" }}>
                    {obj.title}
                  </Card.Title>
                  <Card.Text className="fs-5 text-bg-info">
                    Ratings : {obj.ratings}
                  </Card.Text>
                  <Card.Text className="fs-5 text-danger">
                    Offer Price : {obj.offerprice}
                  </Card.Text>
                  <Card.Text className="fs-5 text-warning">
                    Original Price : {obj.orginalPrize}
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                      <Button variant="primary" className="mx-2">Buy</Button>
                      <Button variant="primary" className="mx-2" onClick={()=>{
                        handlecount({
                          title:obj.title,
                          rating:obj.rating,
                          offer:obj.offerprice,
                          Originalprice : obj.orginalPrize
                        })
                      }}><LiaCartPlusSolid className="cart-icon-add"/> Add</Button> 
                </div>  
                </Card.Body>
              </Card>
            )}
          </>
          
        )}
      </div>
    </div>
  );
}
























// import { useEffect, useState } from "react";
// import Navbarnav from "./navbar";
// import axios from "axios"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// export default function Home(){

//   const [product,setProduct] = useState([])
//   const [searchproduct , setSearchproduct] = useState("")


//   useEffect(()=>{
//     setTimeout(()=>{
//       axios.get("http://localhost:3002/product_data")
//       .then((res)=>{
//         setProduct(()=>res.data)
//         // alert("product")
//     })
//     },500)
//   },[])
  
//   useEffect(() => {
//     const userSearch = localStorage.getItem("usersearch");
//     console.log(userSearch)
//     if (userSearch) {
//       setSearchproduct(userSearch);
//     } else {
//       setSearchproduct("");
//     }
//   });
  
//   // console.log(product)

//   if(searchproduct){
     
//     console.log("searchproduct: " , typeof(searchproduct))
//     console.log(searchproduct)

//      return(
//         <div>
//           <Navbarnav/>  
//           {product.map((obj)=>
//               console.log(obj.title)
//           )}
//         </div>
//      )
     
//   }
   
//   return(
    
//     <div className="App">
//       <Navbarnav/>      

//       <div style={{width:"95vw",height:"auto",display:"flex",justifyContent:"space-around",alignItems:"center" , marginTop:"20px",flexWrap:"wrap"}}>
//       {product.map((obj,index)=>
//          <Card key={index} style={{width:"300px" , height:"auto"}}>
//           <Card.Img variant="top" src={obj.image} style={{width:"100%",height:"200px"}}/>
//          <Card.Body>
//            <Card.Title style={{fontStyle:"italic" , textAlign:"center"}}>{obj.title}</Card.Title>
//            <Card.Text className="fs-5 text-bg-info">ratings : {obj.ratings}</Card.Text>
//            <Card.Text className="fs-5 text-danger">offerprice : {obj.offerprice}</Card.Text>
//            <Card.Text className="fs-5 text-warning">orginalPrize : {obj.orginalPrize}</Card.Text>
//           <div className="d-grid">
//                 <Button variant="primary">Buy</Button>
//           </div>
//          </Card.Body>
//        </Card>
//       )}
//       </div>
//     </div>
//   )
// }
