import { useState } from "react";
import {data} from "./data.js"
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';

export default function Search(){
    const [database,setDatabase] = useState(data)
    const [search , setSearch ] = useState("")


    return(
       <div>
        <Container className="mt-4">  
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="basic-addon1"
                  onChange={(event)=>{setSearch(event.target.value)}}
                />
            </InputGroup>
        </Container>

        <ul>
            {data.map((obj,index)=>{
                if(obj.name.startsWith(search)){
                      return (
                          <>
                            <li key={index}>{obj.name}</li>
                            <li key={{index}}>{obj.age}</li>
                            <li key={{index}}>{obj.color}</li>
                          </>
                      )
                }
                else if(search === ""){
                  return(
                     <div key={index}>
                       <h3>{obj.name}</h3>
                       <h4>{obj.age}</h4>
                       <h5>{obj.color}</h5>
                     </div>
                  )
                }
            })}
        </ul>
       </div>  
    )
}