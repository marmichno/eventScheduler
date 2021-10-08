
const isLoggedReducer = (state = false, action: { payload: boolean; type: any; }) => {

    const payload = action.payload;

    switch(action.type){
        case 'ISLOGGED':
            return payload;

        default:
            return state;
    }
}

export default isLoggedReducer;