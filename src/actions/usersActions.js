import axios from 'axios'
import {updateLoginToken} from './loginActions'
import { startGetCategories } from './categoriesAction'
import { startGetBudget } from './budgetActions'
import { startGetExpenses } from './expensesActions'

export const startRegisterUsers = (formData,tag) =>{
    return (dispatch)=>{
        axios.post('http://localhost:3060/api/users/register',formData)
            .then((response)=>{
                tag()
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const startLoginUsers = (formData,clearForm) =>{
    return (dispatch)=>{
        axios.post('http://localhost:3060/api/users/login',formData)
            .then((response)=>{
                const token = response.data
                clearForm()
                localStorage.setItem('token',JSON.stringify(token))
                dispatch(updateLoginToken(token))
                dispatch(startGetUser(token))
                dispatch(startGetBudget(token))
                dispatch(startGetCategories(token))
                dispatch(startGetExpenses(token))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

export const startGetUser=(logintoken)=>{
    return(dispatch)=>{
        axios.get(`http://localhost:3060/api/user`,{
            headers : {
                'Authorisation' : logintoken.token
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateUserProfile(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}


const updateUserProfile=(data)=>{
    return({
        type : 'SET_USER-PROFILE',
        payload : data
    })
}