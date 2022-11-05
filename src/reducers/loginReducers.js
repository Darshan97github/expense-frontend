const initialLogin = []

const loginReducers = (state=initialLogin, action) =>{
    switch(action.type)  {
        case 'SET_LOGIN-TOKEN' : {
            return [action.payload]
        }
        case 'DELETE_LOGIN-TOKEN' : {
            return []
        }
        default : {
            return [...state]
        }
    }
}

export default loginReducers