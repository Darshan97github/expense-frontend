import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import usersReducers from "../reducers/usersReducers";
import loginReducers from "../reducers/loginReducers";
import categoryReducers from "../reducers/categoryReducers";
import expensesReducers from "../reducers/expenseReducers";
import budgetReducers from "../reducers/budgetReducers";

const configureStore = () =>{
    const store = createStore(combineReducers({
        users : usersReducers,
        tokens : loginReducers,
        categories : categoryReducers,
        expenses : expensesReducers,
        budgets : budgetReducers
    }),applyMiddleware(thunk))
    return store
}

export default configureStore