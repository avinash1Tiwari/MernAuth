import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const SignUp = () => {

    const history = useNavigate()

    const [signData,setSignData] = useState({username:"",useremail:"",userpassword:""})


    const sendRequest = async ()=>{
        
        // let response;
        // try{
        //      response = await axios.get('http://localhost:3001/api/check',{
        //         name : signData.name,
        //         email : signData.email,
        //         password : signData.password
    
        //     })
        // }
        // catch(error){
        //     console.log("error occured during post request")
        //     console.log(error)

        // }

        // console.log("response")
        // console.log(response)














        try {
            const response = await axios.post('http://localhost:3001/api/signup',{
                       username : signData.username,
                        email : signData.useremail,
                        password : signData.userpassword
            });
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error occurred during GET request:", error);
            if (error.response) {
                // Server responded with a status other than 2xx
                console.error("Error response from server:", error.response.data);
                console.error("Status code:", error.response.status);
                console.error("Headers:", error.response.headers);
            } else if (error.request) {
                // Request was made but no response was received
                console.error("No response received:", error.request);
            } else {
                // Something else happened in making the request
                console.error("Error:", error.message);
            }
            console.error("Error config:", error.config);
        }
    }

    const submitHandler = (e) =>{

        e.preventDefault();

        sendRequest().then(()=>history('/login'));

        console.log("signData")
        console.log(signData)
        
    }


    const changeHandler = (e) =>{

        const {name,value} = e.target;
        
        setSignData((data)=> {
          return {  ...data,
            [name] : value}
        })
    //    console.log(signData) 
    }
  return (
    <div className='w-2/4 mx-auto mt-40 border-2 border-black '>
        <div className='text-3xl ml-28'>SignUp</div>
        <form  className='flex flex-col gap-5 py-20 pl-32 text-2xl' onSubmit={submitHandler} >
            <label htmlFor="">Name:
                <br />
                <input type="text" className='border-2 ml-3  border-black rounded' 
                name="username"
                value = {signData.username}
                onChange={changeHandler}
                />
            </label>
            <label htmlFor="">Email:
            <br />
                <input type="text" className='border-2 ml-3 border-black rounded'
                name="useremail"
                value = {signData.useremail}
                onChange={changeHandler}
                />
            </label>
            <label htmlFor="">Password:
            <br />
                <input type="password" className='border-2 ml-3 border-black rounded'
                name="userpassword"
                value = {signData.userpassword}
                onChange={changeHandler}
                />
            </label>

            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default SignUp