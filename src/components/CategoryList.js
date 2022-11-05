import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from 'react-bootstrap/Button'
import { startDeleteCategory} from '../actions/categoriesAction'

const CategoryList = (props) =>{
    const dispatch = useDispatch()
    const categories = useSelector((state)=>{
        return state.categories
    }) || {}

    const loginToken = useSelector((state)=>{
        return state.tokens[0]
    }) || JSON.parse(localStorage.getItem('token'))

    const handleClick=(id)=>{
        let Confirm = window.confirm('Are you sure?')
        if(Confirm){
            dispatch(startDeleteCategory(id,loginToken))
        }
    }

    return(
        <div>
            <ul>
                {categories.map((cat)=>{
                    return( 
                    <div key={cat._id} style={{padding : '10px'}} >
                        <li> {cat.name} <Button onClick={()=>{handleClick(cat._id)}} style={{marginLeft:'50px'}}>Delete</Button></li>
                        
                    </div>
                )})}
            </ul>
        </div>
    )

}

export default CategoryList