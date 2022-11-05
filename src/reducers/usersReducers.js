const initialUsers = []

const usersReducers = (state=initialUsers, action) =>{
    switch(action.type) {
        case 'SET_USER-PROFILE' : {
            return [action.payload]
        }
        default : {
            return [...state]
        }
    }
}

export default usersReducers