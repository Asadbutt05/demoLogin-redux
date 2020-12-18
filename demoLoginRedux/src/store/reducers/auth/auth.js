import * as TYPES from "../../types";

const initialState = {
    users:[]
}

const auth = (state = initialState, actions)=>{
    switch(actions.type){
        case TYPES.SIGNUP:
            console.log('Test 123');
            return {
                ...state,
                users: [...state.users, actions.payload]
            }
        case TYPES.LOGIN:
            return{
                ...state,
                users: actions.payload
            }
        case TYPES.LOGOUT:
            return{
                ...state,
                users: actions.payload
            }
        default:
                return state;
    }
}

export default auth