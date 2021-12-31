import { useEffect } from "react"
import { useNavigate } from "react-router-dom"



const Logout = () => {
    let navee=useNavigate()
    useEffect(() => {
        
        localStorage.removeItem("sname")
        navee("/",{replace:true})
    
    }, [])
    

    return (
        <div>
            
        </div>
    )
}

export default Logout
