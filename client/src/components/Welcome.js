import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Welcome = () => {

    const [user,setUser] = useState();

  axios.defaults.withCredentials = true;
    const sendRequest = async () => {

      let response;
      try{

      //  response = await axios.get('http://localhost:3001/api/getuserdetails',{
      //     // withCredentials:true
      //   })

       response = await axios.get('http://localhost:3001/api/getuserdetails',{
        withCredentials:true
       })
        console.log("response")
        console.log(response)

      }
      catch(error){

        console.log(error)
      }
      let data
      if(response)
       { data = await response.data;
      console.log("data from welcome-page")
      console.log(data.data.username)
      console.log("data from welcome-page")}
      return data;
    }

    useEffect( () =>{

     sendRequest().then((data) =>{
      setUser(data)
        console.log("user.data")
        console.log(data)
      });
      
      // console.log(data)

    },[])

    console.log("user")
    console.log(user)
    console.log("user")

  return (
    <div>Welcome,{user && user.data.username}</div>
  )
}

export default Welcome