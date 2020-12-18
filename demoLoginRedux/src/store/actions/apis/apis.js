import * as TYPES from '../../types'
import axios from 'axios'

export const getCountry = ()=> {
    console.log('Country action called!');
    return (dispatch)=>{
        axios
        .get('https://restcountries.eu/rest/v2/alpha/pak')
        .then((response) => {
            dispatch({
                type:TYPES.GET_COUNTRY,
                payload:response.data.altSpellings
            })
          }, (error) => {
            console.log(error);
          });
    }
}

export const getApiImage = ()=>{
  console.log('API IMAGE action called');
  return (dispatch)=>{
    axios
    .get('https://api.imgflip.com/get_memes')
    .then((response)=>{
    console.log('response for api image: ',typeof response.data.data.memes[0].url);
     const num = Math.floor(Math.random()*100)
      dispatch({
        type:TYPES.GET_API_IMAGE,
        payload:response.data.data.memes[num].url
      })
    }, (error)=>console.log(error))
  }
}