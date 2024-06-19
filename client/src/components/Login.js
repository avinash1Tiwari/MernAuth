// import React from 'react'

// const Login = () => {
//   return (
//     <div>Login</div>
//   )
// }

// export default Login




import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const history = useNavigate()

    const [loginData,setloginData] = useState({useremail:"",userpassword:""})


    const sendRequest = async ()=>{
        
        try {
            const response = await axios.post('http://localhost:3001/api/login',{
                        email : loginData.useremail,
                        password : loginData.userpassword
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

        // sendRequest()

    sendRequest().then(()=>history('/user'));

        console.log("loginData")
        console.log(loginData)
        
    }


    const changeHandler = (e) =>{

        const {name,value} = e.target;
        
        setloginData((data)=> {
          return {  ...data,
            [name] : value}
        })
    //    console.log(loginData) 
    }
  return (
    <div className='w-2/4 mx-auto mt-40 border-2 border-black '>
        <div className='text-3xl ml-28'>Login</div>
        <form  className='flex flex-col gap-5 py-20 pl-32 text-2xl' onSubmit={submitHandler} >
            <label htmlFor="">Email:
            <br />
                <input type="text" className='border-2 ml-3 border-black rounded'
                name="useremail"
                value = {loginData.useremail}
                onChange={changeHandler}
                />
            </label>
            <label htmlFor="">Password:
            <br />
                <input type="password" className='border-2 ml-3 border-black rounded'
                name="userpassword"
                value = {loginData.userpassword}
                onChange={changeHandler}
                />
            </label>

            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Login