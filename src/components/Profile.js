import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/esm/Button'
import { deleteLoginToken } from '../actions/loginActions'

const Profile = (props) =>{
    const user = useSelector((state)=>{
        return state.users
    }) || {}
    const dispatch = useDispatch()
    const {setIsLoggedIn, setKey} = props

    const handleLogout=()=>{
        alert('You are successfully logged out!')
        localStorage.removeItem('token')
        dispatch(deleteLoginToken())
        // props.history.push('register')
        setKey('login')
        setIsLoggedIn(false)
      }

    return(
        <div style={{paddingLeft:'550px'}}>
            <h3>Name : {user.length >0 && user[0].name} </h3>
            <h4>email : {user.length >0 && user[0].email} </h4>
            <Button onClick={handleLogout} >Logout</Button>
        </div>
    )
}

export default Profile