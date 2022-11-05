const initialExpenses = []

const expensesReducers = (state=initialExpenses,  action) =>{
    switch(action.type) {
        case 'SET-EXPENSES' : {
            return [...action.payload]
        }
        case 'ADD-EXPENSE' : {
            return [...state,action.payload]
        }
        case 'EDIT-EXPENSE' : {
            return state.map((ele)=>{
                if(ele._id === action.payload._id){
                    return {...action.payload}
                }else{
                    return {...ele}
                }
            })
        }
        case 'DELETE-EXPENSE' : {
            return state.filter((ele)=>{ return ele._id !== action.payload._id})
        }
        default : {
            return [...state]
        }
    }
}

export default expensesReducers