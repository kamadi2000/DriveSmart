import { createSlice} from '@reduxjs/toolkit'
export const userSlice = createSlice({
    name : 'auth',
    initialState : {
        user : {loggedIn : false , token : '12345'}
    },
    //actions for user object
    reducers : {
        login : (state,action) => {
            state.user = action.payload
        },
        logout : (state) => {
            state.user = null
        }
    }

})

export const { login, logout} = userSlice.actions;
export const selectUser =(state) => state.auth.user;
export const selectIsUserLoggedIn = (state) => state.auth.user?.loggedIn;
export default userSlice.reducer ;
