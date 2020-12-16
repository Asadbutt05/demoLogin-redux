import * as TYPES from '../../types'
import axios from 'axios'

export const getCountry = ()=> {
    console.log('Country action called!');
    return (dispatch)=>{
        axios
        .get('https://restcountries.eu/rest/v2/alpha/pak')
        .then((response) => {
            //console.log(response.data.altSpellings);
            dispatch({
                type:TYPES.GET_COUNTRY,
                payload:response.data.altSpellings
            })
          }, (error) => {
            console.log(error);
          });
    }
}