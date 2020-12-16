import * as TYPES from "../../types";

const initialState = {
    countryData:{}
}

const country = (state=initialState,actions)=>{
    switch(actions.type){
        case TYPES.GET_COUNTRY:
            //console.log('Country reducer called',actions.payload);
            return{
                countryData:actions.payload
            }
        default:
             return state
    }
}

export default country