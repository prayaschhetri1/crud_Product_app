import {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { loginFunc } from '../AuthRedux/action';
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const dispatch = useDispatch()

    const navigate = useNavigate()
   
    const [inputData,setInputData] = useState({
        email:"",
        password:""
    })

    const handleChange = (e) => {
       const {name,value} = e.target;
       setInputData({...inputData,[name]:value})
    }
  
    const handleLoginSubmit = (e) => {
        e.preventDefault()
        dispatch(loginFunc(inputData))
        .then((res) => {
            
            if(res.type==="LOGIN_SUCCESS"){
                navigate("/")
            }
        })
    }

  
  return (
    <div style={{textAlign:"center"}}>
        <form onSubmit={handleLoginSubmit}>
        <div style={{display:"flex",flexDirection:'column',alignItems:"center"}}>
            <label>ADD EMAIL</label>
         <input onChange={handleChange} name="email" type="text" placeholder='Add email address...' />
         </div>
         <br />
         <div style={{display:"flex",flexDirection:'column',alignItems:"center"}}>
            <label>ADD PASSWORD</label>
         <input onChange={handleChange} name="password"  type="password" placeholder='Add password here..' />
         </div>
         <br />
         <div>
            <input type="submit" value="LOGIN" />
         </div>
         </form>
    </div>
  )
}

export default Login