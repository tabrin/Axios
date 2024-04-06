import axios from 'axios';
import React, { useState } from 'react'
interface IUser{
    data:{
        firstname:string,
        lastname:string
    }
}
 const PostAxios:React.FC=()=>{
    const[state, setState]=useState<IUser>({data:{
        firstname:"",
        lastname:" "
    }});
 
const handleData =(e: React.ChangeEvent<HTMLInputElement>)=>{
    setState({...state,
        data:{...state.data,
            [e.target.name]:e.target.value}})
}

const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    axios.post("https://jsonplaceholder.typicode.com/users", state)
    .then((res)=>{
        console.log(res)
    })
    .catch((errors)=>{
        console.log("error posting data:", errors)
    })
}

    return(
        <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name :</label><br />
        <input type="text" name='firstname' value={state.data.firstname}  onChange={handleData}/><br /><br />
        <label htmlFor="lastname">Last Name :</label><br />
        <input type="text" name='lastname' value={state.data.lastname} onChange={handleData} /><br /><br />

        <button className='btn btn-primary' type='submit'>Submit</button>
        </form>
        </>
    )
 }
 export default PostAxios;