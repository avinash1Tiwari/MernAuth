import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
   
    <div className='flex justify-between bg-blue-500 px-4 py-2 shadow-2xl rounded-xl'>
    <h3 className='text-3xl'>MernAuth</h3>
        <div className='flex gap-7 mr-10 text-xl'>
                <Link className='hover:text-blue-300 transition ease-in-out  duration-300' tra to = "/login">Login</Link>
                <Link className='hover:text-blue-300 transition ease-in-out   duration-300' to = "/signup">SignUp</Link>
            
        </div>

    </div>
  )
}

export default Header