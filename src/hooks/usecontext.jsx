import React , { createContext, useContext, useState } from 'react'
const UserContext = createContext()

export default function Usecontext(){
    const [user,setUser] = useState(
        {name:"udhaya prakash",age:23,fav_color:"white"}
    )
    return(
        <UserContext.Provider value = {user}>
        <h1>Use context</h1>
        <Component2  />
        </UserContext.Provider>
        
    )
}

function Component2(){
    return(
        <>
        <h3>Component 2</h3>
        
        <Component3 /></>
    )
}

function Component3(){
    return(
        <>
        <h3>Component 3</h3>
        <Component4 /></>
    )
}

function Component4(){
    return(
        <>
        <h3>Component 4</h3>
        <Component5  /></>

    )
}

function Component5(){
    const user = useContext(UserContext)
    return(
        <>
        <h3>Component 5</h3>
        <h3> {`${user.name} ${user.age} ${user.fav_color}`}</h3>
        </>
    )
}