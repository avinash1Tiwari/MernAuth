import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
const Welcome = () => {

    const [user,setUser] = useState();

  axios.defaults.withCredentials = true;
// AUTHENTICATION WITH BEARER TOKEN

  const sendRequest = async () => {

    let response;
    try{
     response = await axios.get('http://localhost:3001/api/getuserdetails',{
      headers : {
         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzMyZTI2MmM2MGVlMWE3ZDdiMzc2ZiIsImVtYWlsIjoidHVzaGFyQGdtYWlsLmNvbSIsImlhdCI6MTcxODg2MTgwNywiZXhwIjoxNzE4ODY1NDA3fQ.GJyHyE4FUksxh79z0g-LFNxrt9IxMMljyiltL0wvbtY`
      }
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

    setUser(data)

    // return data;
  }



    console.log("user")
    console.log(user)
    console.log("user")

  return (

    <div>

<div>Welcome,{user && user.data.username} and Email {user && user.data.email}</div>

<button onClick={sendRequest}>CLick here</button>
    </div>


    
  )
}

export default Welcome