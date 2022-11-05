const initialBudget = []

const budgetReducers = (state=initialBudget,action) =>{
    switch(action.type) {
        case 'SET-BUDGET' : {
            return [action.payload]
        }
        case 'GET-BUDGET' : {
            return action.payload
        }
        default : {
            return [...state]
        }
    }
}

export default budgetReducers