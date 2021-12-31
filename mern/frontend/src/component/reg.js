import React, { useEffect } from 'react'

import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useState } from 'react'

const Reg = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        subdata()
      
    },[])
    let navigate =useNavigate()
    const subdel=()=>{
  
    }
    
    const vall=localStorage.getItem("sname")
    useEffect(() => {
        if(vall==null)
        {
         navigate("/",{replace:true})
        }
        
    }, [])
  
  console.log(data)
    const user = ({
        uname: "",
        email: "",
        pass: ""
    })
    const subdata = () => {
  
        axios.get("/list").then((res)=>{
                   setData(res.data.data)
                  
               })
               

    }
    
    const sublog = () => {
        console.log("user",user)
        axios.post("/reg", user).then((res) =>{
           navigate("/reg",{replace:false})
           
        })

    }
  

    return (
        
        <div>
              
            {/* {localStorage.getItem("sname")} */}
            <input onChange={(e) => user.uname = e.target.value} type={"text"} placeholder='Please Enter Name..' /><br />
            <input onChange={(e) => user.email = e.target.value} type={"email"} placeholder='Please Enter Email..' /><br />
            <input onChange={(e) => user.pass = e.target.value} type={"password"} placeholder='Please Enter Password' /><br />
            <input onClick={sublog} type={"submit"} />
          
            <h3>for Login..</h3><NavLink to="/">Click</NavLink>
            <table  border="2px">
          
               <tr>
                   <th>
                       Uname
                   </th>
                   <th>
                       email
                   </th>
                   <th>
                       pass
                   </th>
               </tr>
         
           
         {data.map((item,index)=>(
             <>
             
               <tr>
               <th >
                    {index+1}
                   </th>
                   <th >
                    {item.uname}
                   </th>
                   <th>
                   {item.email}
                   </th>
                   <th>
                   {item.pass}
                   </th>
                   <th>
                 <button onClick={subdel}  >Delete</button>
                   </th>
                
               </tr>
       
            
             </>
         )
         
           )}
            </table>
        </div>

        
    )
}

export default Reg
