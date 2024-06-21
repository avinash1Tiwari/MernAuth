import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
const Welcome = () => {
  let firstRender = true;
  const [user, setUser] = useState();

  axios.defaults.withCredentials = true;
  // AUTHENTICATION WITH COOKIES

  // 2.with cookies
  const sendRequest = async () => {
    let response;
    try {
      response = await axios.get("http://localhost:3001/api/getuserdetails", {
        withCredentials: true,
      });
      console.log("response");
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    let data;
    if (response) {
      data = await response.data;
      // console.log("data from welcome-page")
      // console.log(data.data.username)
      // console.log("data from welcome-page")
    }
    return data;
  };

  // refresh
  const refreshToken = async () => {
    let response;
   try{
   response = await axios
    .get("http://localhost:3001/api/refresh", {
      withCredentials: true,
    })
   }
  catch(error){
    console.log(error)
  };
  if(!response)
    {
      console.log("error occured in taking response during refresh")
      return response;
    }
    const data = await response.data;
    console.log("user.data");
    console.log(data);

    return data;
  };


  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      sendRequest().then((data) => {
        setUser(data);
      });
    } 
      let interval = setInterval( async () => {
       
        try{
            const res = await refreshToken();
            console.log("refreshed data")
            console.log(res)
        }
        catch(error){
          console.log("errror occured in refreshing-intrval")
          console.log(error)
        }
        },1000 * 29);


        return () => clearInterval(interval);
      }, []);



  console.log("user");
  console.log(user);
  console.log("user");

  return (
    <div>
      <div>
        Welcome,{user && user.data.username} and Email {user && user.data.email}
      </div>

      <button onClick={sendRequest}>CLick here</button>
    </div>
  );
};

export default Welcome;
