import  { useState } from 'react'

function StateExample(){
    // let user = "React"
    const [user,setUser] = useState('React')

    const changeName = () =>{
        // console.log("done");
        setUser('JS')
        // user = "Angular
    }
    return(
        <>
        <h3>{user}</h3>
        <button onClick = {changeName}>ChangeName</button>
        </>
    )
}

// export default StateExample;

function Statecounter(){
    const [counter,setcounter] = useState(100)
    const increment = () =>{
        setcounter((prev) => prev+3)
    }
    const decrement = () =>{
        setcounter((prev) => prev-3)
    }

    return(
        <>
        <h3>{`counter value is ${counter}`}</h3>
        <button onClick ={increment}>Increment</button>
        <button onClick ={decrement}>Decrement</button></>
    )
}

// export default Statecounter;

function Statecounter5(){
    const [counter,setcounter] = useState({value : 100,type:'counter'})
    const increment = () =>{
        setcounter((prev) => {
            return {value:prev.value+3}
    })
    }
    const decrement = () =>{
        setcounter((prev) => {
            return {value:prev.value-3}
        })
    }

    return(
        <>
        <h3>{`value is ${counter.value}`}</h3>
        <button onClick ={increment}>Increment</button>
        <button onClick ={decrement}>Decrement</button></>
    )
}

// export default Statecounter5;

// import React, { useState } from 'react';

const SignupForm =() => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // console.log(formData,name)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add logic here to send the form data to a server or do anything else with it
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" />
      <br />
      <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" />
      <br />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <br />
      <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" />
      <br />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignupForm;
