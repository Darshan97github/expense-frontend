import axios from "axios";

export const startGetCategories = (loginToken) =>{
    return(dispatch)=>{
        axios.get('http://localhost:3060/api/users/categories',{
            headers : {
                "Authorisation" : `${loginToken.token}`
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateGetCategories(result))
            })
    }
}

const updateGetCategories=(data)=>{
    return({
        type : 'SET-CATEGORIES',
        payload : data
    })
}

export const startAddCategory = (formData,clearForm, loginToken) =>{
    return(dispatch)=>{
        axios.post('http://localhost:3060/api/users/categories/register', formData, {
            headers : {
                "Authorisation" : loginToken.token
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateAddCategory(result))
                clearForm()
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

const updateAddCategory = (data) =>{
    return({
        type : 'ADD-CATEGORY',
        payload : data
    })
}

export const startEditCategory = (id,formData, loginToken) =>{
    return(dispatch)=>{
        axios.post(`http://localhost:3060/api/users/categories/${id}`,formData,{
            headers : {
                "Authorisation" : loginToken.token
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateEditCategory(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

const updateEditCategory = (data) =>{
    return({
        type : 'EDIT-CATEGORY',
        payload : data
    })
}

export const startDeleteCategory = (id, loginToken) =>{
    return(dispatch)=>{
        axios.delete(`http://localhost:3060/api/users/categories/${id}`,{
            headers : {
                "Authorisation" : loginToken.token
            }
        })
            .then((response)=>{
                const result = response.data
                dispatch(updateDeleteCategory(result))
            })
            .catch((err)=>{
                alert(err.message)
            })
    }
}

const updateDeleteCategory = (data) =>{
    return({
        type : 'DELETE-CATEGORY',
        payload : data
    })
}