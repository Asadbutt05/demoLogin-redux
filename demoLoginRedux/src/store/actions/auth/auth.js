import * as TYPES from '../../types';

const loginStatus = (users,email)=>{
    users = users.map(user=>{
        if(user.email===email){
            return{...user,isLogged:true}
        }else return user
    })
    return users
}

const logoutStatus = (users,email)=>{
    console.log('AAAAAAAAAAAAAAAAAAAAA',email);
    const newUsers = users.map(user=>{
        if(user.email===email){
            return{...user,isLogged:false}
        }else return user
    })
    return newUsers
}

export const signup = (payload)=>{
    console.log('SIGNUP ACTIONSSS');
    return {
        type:TYPES.SIGNUP,
        payload,
    }
}

export const login = (users,email)=>{
    const newUsers = loginStatus(users,email)
    //console.log('Login action. New users: ',newUsers);
    return {
        type:TYPES.LOGIN,
        payload:newUsers
    }
}

export const logout = (users,email)=>{
    console.log('BBBBBBBBBBBBB',email);
    const newUsers = logoutStatus(users,email)
    console.log('logout action. users: ',newUsers);
    return{
        type:TYPES.LOGOUT,
        payload:newUsers
    }
}