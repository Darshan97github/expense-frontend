import React from "react"
import { useSelector } from "react-redux"
import {buildStyles, CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Budget = (props) =>{
    const budget = useSelector((state)=>{
        return state.budgets[0]
    }) || {}
    const expenses = useSelector((state)=>{
        return state.expenses
    }) || {}

    const TotalExpense=()=>{
    let sum = 0
    expenses.forEach(ele => { return sum +=ele.amount})
    return sum
    }

    let chartValue = ((TotalExpense()/budget.budget)*100).toFixed(2) || '0'


    return(
        <div style={{display:'inline-flex'}} className='budget' >
            <div style={{width:'200px', height:'200px', paddingLeft:'20px'}}>
                <h3>Budget overview</h3>
                <CircularProgressbar 
                value={chartValue} 
                maxValue={100} 
                text={`${(isNaN(chartValue) ? (chartValue = 0) : (chartValue))}% spent`} 
                strokeWidth={6}
                styles={buildStyles({
                    textSize:'13px'
                })}
                />
            </div>
            <div style={{padding:'50px'}}>
                <h4>Total Budget</h4>
                <h4> {budget.budget ? (budget.budget) : (0) } </h4>
                <h4>Total Expenses</h4>
                <h4> {TotalExpense() ? (TotalExpense()) : (0)} </h4>
            </div>
            
        </div>
    )
}

export default Budget