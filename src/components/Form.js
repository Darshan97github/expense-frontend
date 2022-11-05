import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";

import { startCreateBudget } from "../actions/budgetActions";
import { startAddCategory } from "../actions/categoriesAction";

const Form=(props)=>{
    const {formType} = props
    const dispatch = useDispatch()
    const user = useSelector((state)=>{
        return state.users
    }) || {}
    const loginToken = JSON.parse(localStorage.getItem('token'))
    const [budget, setBudget] = useState('')
    const [name, setName] = useState('')

    const handleChange=(e)=>{
        let attr = e.target.name
        if(attr === 'name'){
            setName(e.target.value)
        }else if(attr==='budget'){
        setBudget(e.target.value)
        }
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        const clearForm=()=>{
            setName('')
            setBudget('')
        }
        if(formType === 'Budget-form'){
            const formData = {
                userId : user[0]._id,
                budget}
            dispatch(startCreateBudget(clearForm,formData,loginToken))
        }else if(formType === 'Category-form'){
            const catData={
                name,
                userId : user[0]._id
            }
            dispatch(startAddCategory(catData,clearForm,loginToken))
        }
    }

    return(
        <div style={{display:'inline-block', paddingLeft:'10px'}}>
            {formType=== 'Budget-form' ? (<h4>Budget</h4>) : (<h4>Categories</h4>)}
            <form onSubmit={handleSubmit} style={{paddingLeft:'200px', display:'inline-block'}}>
                {formType === 'Category-form' && <input type='text'name='name' value={name} onChange={handleChange} placeholder='name' />}

                {formType==='Budget-form' && <input type='number' name='budget' value={budget} onChange={handleChange} placeholder='enter budget' />}

                <input type='submit' value={formType==='Budget-form'? ('update') : ('Add')} />
            </form>
        </div>
    )
}

export default Form