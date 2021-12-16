
const selectEventEventFinderReducer = (state = null, action: { payload: number | null; type: any; }) => {

    const payload = action.payload;

    switch(action.type){
        case 'SELECTEVENTEVENTFINDER':
            return payload;

        default:
            return state;
    }
}

export default selectEventEventFinderReducer;