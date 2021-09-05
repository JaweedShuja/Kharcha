import { ADD_USER, GET_USER } from "./userType"

export const addUser = (payload) => {
    return{
        type:ADD_USER,
        payload:payload
    }
}

export const getUser = () => {
    return {
        type:GET_USER
    }
}