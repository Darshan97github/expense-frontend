import axios from "axios";

export const startCreateBudget=(clearForm, formData,loginToken)=>{
    return(dispatch)=>{
        axios.post('http://localhost:3060/api/users/budget/register', formData,{
            headers : {
                "Authorisation" : `${loginToken.token}`
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateSetBudget(result))
                clearForm()
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

const updateSetBudget=(data)=>{
    return({
        type : 'SET-BUDGET',
        payload : data
    })
}

export const startGetBudget=(loginToken)=>{
    return(dispatch)=>{
        axios.get('http://localhost:3060/api/users/budget',{
            headers : {
                'Authorisation' : loginToken.token
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateGetBudget(result))
            })
            .catch((err)=>{
                alert(err.mesaage)
            })
    }
}

const updateGetBudget= (data) =>{
    return {
        type : 'GET-BUDGET',
        payload : data
    }
}