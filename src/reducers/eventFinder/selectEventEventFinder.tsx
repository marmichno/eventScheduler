
const selectEventEventFinderReducer = (state = 0, action: { payload: number; type: any; }) => {

    const payload = action.payload;

    switch(action.type){
        case 'SELECTEVENTEVENTFINDER':
            return payload;

        default:
            return state;
    }
}

export default selectEventEventFinderReducer;