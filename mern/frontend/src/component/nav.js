

import React from 'react'
import {Link } from 'react-router-dom'

const  Nav = () => {
    return (
       <div>
           <ul className='nav-ul'>
               
               {localStorage.getItem("sname") &&  <li> <Link to="/logout">Logout</Link></li>}
               {!localStorage.getItem("sname") &&  <li> <Link to="/">Home</Link></li>}
               <li> <Link to="/reg">Registartion</Link></li>
           </ul>
       </div>
         
           
        
    )
}

export default Nav
