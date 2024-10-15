import { useEffect, useState } from "react";


let  obj = [
  {name:"udhaya prakash",age:23},{name:"udhaya shankar" , age:23}
]

function Useeffect(){
   const [data,setData] = useState([])

   useEffect(()=>{
      setTimeout(()=>{
           setData(obj)
      },3000)
   })


   return(
      <div>
        {data.length === 0 && <div>loading...</div>}  
       <table>
          {data.map((object,index)=>
            <tr key={index}>
               <td>{object.name}</td>
               <td>{object.age}</td>
            </tr>
          )}
       </table>
      </div>
   )
}

export default Useeffect