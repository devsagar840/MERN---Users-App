import axios from "axios"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const Login = () => {
    
    let navigate=useNavigate()
    const user=({
        uname:"",
        pass:""
    })
    const sublog=()=>{
        
        axios.post("/log",user).then((res)=>{
           localStorage.setItem("sname",res.data.data[0].uname)
            if(res.data.data.length===1){
                console.log(res.data.data.length)
            navigate("/reg",{replace:false})
            }
           
          
        })
    }
    return (
        <div>
            <input onChange={(e)=>user.uname=e.target.value} type={"text"} placeholder="Please Enter Username." /><br/>
            <input onChange={(e)=>user.pass=e.target.value}type={"password"} placeholder="Please Enter Password" /><br/>
            <input onClick={sublog} type={"submit"}/>
            <h3>for register..</h3><NavLink to="/reg">Click</NavLink>
            
        </div>
    )
}

export default Login
