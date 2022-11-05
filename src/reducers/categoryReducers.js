const initialCategory = []

const categoryReducers = (state=initialCategory, action) =>{
    switch(action.type) {
        case 'SET-CATEGORIES' : {
            return [...action.payload]
        }
        case 'ADD-CATEGORY' : {
            return [...state, action.payload]
        }
        case 'EDIT-CATEGORY' : {
            return state.map((ele)=>{
                if(ele._id === action.payload._id ){
                    return {...action.payload}
                }else{
                    return {...ele}
                }
            })
        }
        case 'DELETE-CATEGORY' : {
            return state.filter((ele)=>{ return ele._id !== action.payload._id })
        }
        default : {
            return [...state]
        }
    }
}

export default categoryReducers