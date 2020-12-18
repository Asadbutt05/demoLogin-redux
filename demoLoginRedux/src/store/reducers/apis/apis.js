import * as TYPES from "../../types";

const initialState = {
    countryData:false, apiImage:false
}

const apis = (state=initialState,actions)=>{
    switch(actions.type){
        case TYPES.GET_COUNTRY:
            //console.log('Country reducer called',actions.payload);
            return{
                countryData:actions.payload
            }
        case TYPES.GET_API_IMAGE:
            //console.log('Country reducer called',actions.payload);
            return{
                apiImage:actions.payload
            }
        default:
             return state
    }
}

export default apis