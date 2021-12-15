
const selectEventTypeEventFinderReducer = (state = "PUBLIC", action: { payload: string; type: any; }) => {

    const payload = action.payload;

    switch(action.type){
        case 'EVENTSTYPEEVENTFINDER':
            return payload;

        default:
            return state;
    }
}

export default selectEventTypeEventFinderReducer;