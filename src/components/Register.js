import React,{useState} from "react";
import { useDispatch } from "react-redux";
import isEmail from 'validator/lib/isEmail'
import './style.css'

import { startRegisterUsers } from "../actions/usersActions";

const Register = (props) =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})
    const formErrors = {} 
    const {setKey} = props
    const dispatch = useDispatch()

    const handleChange  = (e) =>{
        let attr = e.target.name
        if(attr === 'name'){
            setName(e.target.value)
        }else if(attr === 'email'){
            setEmail(e.target.value)
        }else if(attr === 'password'){
            setPassword(e.target.value)
        }
    }

    const validations = ()=>{
        if(name.trim().length === 0 ){
            formErrors.name = 'name cannot be empty'
        }
        if(!isEmail(email)){
            formErrors.email = 'invalid email'
        }
        if(password.length === 0){
            formErrors.password = 'password cannot be empty'
        }else if(password.length < 8){
            formErrors.password = 'too short password'
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        validations()
        if(Object.keys(formErrors).length === 0){
            const formData = {
                name,
                email,
                password
            }
            const tag=()=>{
                alert('Successfully created an account!')
                setName('')
                setEmail('')
                setPassword('')
                // props.history.push('login')
                setKey('login')
            }
            dispatch(startRegisterUsers(formData,tag))
        }else{
            setErrors(formErrors)
        }
    }
    
    return(
        <div  className="reg" >
            <h3 style={{paddingLeft:'35%',paddingTop:'100px'}}>Welcome to Expense-App</h3>
            <form onSubmit={handleSubmit} className="formReg" >
                {errors.name && <span style={{color:'red'}}>{errors.name}</span>}<br/>
                <input type='text' name="name" value={name} onChange={handleChange} placeholder="Enter name" /><br/>

                {errors.email && <span style={{color:'red'}}>{errors.email}</span>}<br/>
                <input type='text' name="email" value={email} onChange={handleChange} placeholder="email" /><br/>

                {errors.password && <span style={{color:'red'}}>{errors.password}</span>}<br/>
                <input type='password' name="password" value={password} onChange={handleChange} placeholder="password" /><br/><br/>

                <input type='submit' value='register' /><br/>

            </form>
        </div>
    )
}

export default Register