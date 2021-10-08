
const showNavbarReducer = (state = false, action: { payload: boolean; type: any; }) => {

    const payload = action.payload;

    switch(action.type){
        case 'SHOWNAVBAR':
            console.log(payload);
            return payload;

        default:
            return state;
    }
}

export default showNavbarReducer;