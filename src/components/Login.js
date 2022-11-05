import React,{useState} from "react";
import { useDispatch } from "react-redux";
import isEmail from "validator/lib/isEmail";
import './style.css'

import { startLoginUsers } from "../actions/usersActions";

const Login = (props) =>{
    const {setIsLoggedIn} = props
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const {setKey} = props
    const formErrors = {}
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        let attr = e.target.name
        if(attr === 'email'){
            setEmail(e.target.value)
        }else if(attr === 'password'){
            setPassword(e.target.value)
        }
    }

    const validations = ()=>{
        if(!isEmail(email) ){
            formErrors.name = 'invalid email'
        }
        if(password.length === 0){
            formErrors.password = 'password is empty'
        }else if(password.length < 8){
            formErrors.password = 'too short password'
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        validations()
        if(Object.keys(formErrors).length === 0){
            const formData = {
                email,
                password
            }
            console.log(formData)
            const clearForm=()=>{
                setEmail('')
                setPassword('')
                setIsLoggedIn(true)
                // props.history.push('home')
                setKey('home')
            }
            dispatch(startLoginUsers(formData, clearForm))
        }else{
            setErrors(formErrors)
        }
    }

    return(
        <div className="reg">
            <form onSubmit={handleSubmit} className='formReg'>
                {errors.email && <span style={{color:'red'}}>{errors.email}</span>}<br/>
                <input type='text' name='email' value={email} onChange={handleChange} placeholder='email' /><br/>

                {errors.password && <span style={{color:'red'}}>{errors.password}</span>}<br/>
                <input type='password' name='password' value={password} onChange={handleChange} placeholder='password' /><br/><br/>

                <input type='submit' value='Login' /><br/>

            </form>
        </div>
    )
}

export default Login