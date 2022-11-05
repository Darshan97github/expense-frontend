import React,{useState, useEffect} from "react";
import {withRouter} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Tabs from 'react-bootstrap/Tabs'
import  Tab from 'react-bootstrap/Tab'
import './style.css'

import Home from "./Home";
import Settings from "./Settings";
import Profile from "./Profile";
import Register from "./Register";
import Login from "./Login";

import {updateLoginToken} from '../actions/loginActions'
import { startGetCategories } from "../actions/categoriesAction";
import { startGetExpenses } from "../actions/expensesActions";
import { startGetUser } from "../actions/usersActions";
import { startGetBudget } from "../actions/budgetActions";

const Container=(props)=>{
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginToken, setLoginToken] = useState({})
  const [key, setKey] = useState('register')
  const dispatch = useDispatch()

  useEffect(()=>{
    const logintoken = JSON.parse(localStorage.getItem('token'))
      if(logintoken){
      setLoginToken(logintoken)
      updateLoginToken(logintoken)
      setIsLoggedIn(true)
      setKey('home')
    }
  },[])

  useEffect(()=>{
    if(Object.keys(loginToken).length > 0){
      dispatch(startGetUser(loginToken))
      dispatch(startGetBudget(loginToken))
      dispatch(startGetCategories(loginToken))
      dispatch(startGetExpenses(loginToken))
      }
  },[loginToken])

      return(
        <div >
          <nav >
            {!isLoggedIn ? (
                <Tabs
                activeKey={key}
                onSelect={(k)=>setKey(k)}
                className="nav"
                >
                    <Tab eventKey="register" title="Register" className="tab" >
                      <Register setKey={setKey}  />
                    </Tab>
                    <Tab eventKey="login" title="Login" >
                      <Login {...props} setKey={setKey} setIsLoggedIn={setIsLoggedIn} />
                    </Tab>
                </Tabs>
            ) : (
              <Tabs
              activeKey={key}
              onSelect={(k)=>setKey(k)}
              className="nav"
              >
                  <Tab eventKey="home" title="Home" className="tab">
                    <Home />
                  </Tab>
                  <Tab eventKey="settings" title="Settings" >
                    <Settings />
                  </Tab>
                  <Tab eventKey="profile" title="Profile" >
                    <Profile {...props} setKey={setKey} setIsLoggedIn={setIsLoggedIn} />
                  </Tab>
              </Tabs>
              )}
          </nav>

        {/* <div style={{paddingLeft:'50px'}}>
            <Route path='/' component={Home} exact={true} />
            <Route path='/settings' component={Settings} exact={true} />
            <Route path='/profile' component={Profile} exact={true} />
            <Route path='/register' component={Register} exact={true} />
            <Route path='/login' render={(props)=>{
              return <Login {...props} setIsLoggedIn={setIsLoggedIn} />
            }} exact={true} />
        </div> */}
        {/* <div>
            <ul style={{listStyle:'none'}} >
            {!isLoggedIn ? (
              <>
                <li style={{padding : '5px' }} ><Link to='/register' >Register</Link></li>
                <li style={{padding : '5px' }} ><Link to='/login' >Login</Link></li>

                
              </>
            ) : (
              <>
                <li style={{padding : '5px' }}><Link to='/'>Home</Link></li>
                <li style={{padding : '5px' }} ><Link to='/settings'>Settings</Link></li>
                <li style={{padding : '5px' }} ><Link to='/profile'>Profile</Link></li>
                <li style={{padding : '5px' }} ><Button as='a' variant="primary" onClick={handleLogout}>Logout</Button></li>
              </>
            )}
                
            </ul>
        </div> */}
    </div>
  )
}

export default withRouter(Container)