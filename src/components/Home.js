import React from 'react'
import Budget from './Budget'
import CategoryStats from './CategoryStats'
import ExpensesList from './ExpensesList'
import ExpensesForm from './ExpensesForm'

const Home = (props) =>{

    return(
        <div>
            <div style={{display: 'inline-flex', paddingLeft:'300px'}}  >
                <Budget />
                <div style={{paddingLeft: '50px'}}>
                    <CategoryStats />
                </div>
            </div>
            <ExpensesForm />
            <ExpensesList />
        </div>
    )
}

export default Home