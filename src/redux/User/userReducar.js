import { ADD_USER, GET_USER } from "./userType";

const initialState = {
    token:''
}

const UserReducar = (state = initialState, action) => {
    switch(action.type){
        case ADD_USER : 
            return {
                ...action.payload
            }
        case GET_USER :
            return state      
        default : 
            return state
    }
}

export default UserReducar