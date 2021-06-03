export const setUserInfo = (payload) => {
   return{
    type: 'SET_USER_INFO',
    payload: payload,
   }
}
// export const middlewareUser = (payload) =>{
//     return (dispatch) => {

//         dispatch(loadUserInfo(payload));

//     }
// }
