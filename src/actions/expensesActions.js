import axios from "axios";

export const startGetExpenses = (loginToken) =>{
    return(dispatch)=>{
        axios.get('http://localhost:3060/api/users/categories/expenses',{
            headers : {
                'Authorisation' : `${loginToken.token}`
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateGetExpenses(result))
                
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

const updateGetExpenses=(data)=>{
    return({
        type : 'SET-EXPENSES',
        payload : data
    })
}

export const startAddExpense = (formData, handleClick, loginToken, clearForm) =>{
    console.log('jwt',loginToken)
    return(dispatch)=>{
        axios.post('http://localhost:3060/api/users/categories/expenses/register', formData, {
            headers : {
                "Authorisation" : loginToken.token
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateAddExpense(result))
                handleClick()
                clearForm()
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

const updateAddExpense = (data) =>{
    return({
        type : 'ADD-EXPENSE',
        payload : data
    })
}

export const startEditExpense = (id,formData, loginToken) =>{
    return(dispatch)=>{
        axios.put(`http://localhost:3060/api/users/categories/expenses/${id}`,formData,{
            headers : {
                "Authorisation" : loginToken.token
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateEditExpense(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

const updateEditExpense = (data) =>{
    return({
        type : 'EDIT-EXPENSE',
        payload : data
    })
}

export const startDeleteExpense = (id, loginToken) =>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3060/api/users/categories/expenses/${id}`,{
            headers : {
                "Authorisation" : loginToken.token
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateDeleteExpense(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

const updateDeleteExpense = (data) =>{
    return({
        type : 'DELETE-EXPENSE',
        payload : data
    })
}