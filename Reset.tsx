import React, { useEffect } from 'react'
import {useForm} from 'react-hook-form'

import axios from 'axios';
 const Reset:React.FC=()=>{
    const {register, handleSubmit, reset}= useForm();
    const onsubmit=(data:any)=> console.log(data)

useEffect(()=>{
 loadUser();
},[])

const loadUser = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (res.data.length > 0) {
        reset(res.data[0]);
    }
}
   
    return(
        <>
        <div>
            <h1>Update User</h1>
        </div>
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
            <input type="text" placeholder='Enter your Name'{...register('name')}  /><br/><br/>
            <input type="text" placeholder='Enter your User Name'{...register('username')}  /><br/><br/>
            <input type="text" placeholder='Enter your email'{...register('email')}  /><br/><br/>
            <input type="text" placeholder='Enter your street'{...register('address.street')}  />
            <input type="text" placeholder='Enter your suite'{...register('address.suite')}  /><br/><br/>
            <input type="text" placeholder='Enter your city'{...register('address.city')}  />
            <input type="text" placeholder='Enter your zipcode'{...register('address.zipcode')}  /><br/><br/>
            <input type="text" placeholder='Enter Your Phone Number'{...register('phone')} />
            <input type="text" placeholder='Enter Your Phone Website Name'{...register('website')} /><br/><br/>
            <input type="text" placeholder='Enter Your Phone Company Name'{...register('company.name')} /><br/><br/>
            <input type="text" placeholder='Enter Your Phone Company Name'{...register('company.catchPhrase')} /><br/><br/>
            <input type="text" placeholder='Enter Your Phone Company Name'{...register('company.bs')} /><br/><br/>
            <button type='submit'>Update User</button>
            </form>


        </div>
        </>
        
    )
 }
 export default Reset;