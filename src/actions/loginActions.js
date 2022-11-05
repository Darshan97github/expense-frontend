export const updateLoginToken = (data) =>{
    return ({
        type : 'SET_LOGIN-TOKEN',
        payload : data
    })
}

export const deleteLoginToken = () =>{
    return({
        type : 'DELETE_LOGIN-TOKEN',
    })
}