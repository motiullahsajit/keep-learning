const initialState = {
    userInfo:{},
}


export const courseReducer =(state = initialState, action) =>{
    switch(action.type){

        case 'SET_USER_INFO': {
            const newData ={
                ...state,
                userInfo:action.payload,
            }
            return newData;
        };
        default: return state;
    }
}