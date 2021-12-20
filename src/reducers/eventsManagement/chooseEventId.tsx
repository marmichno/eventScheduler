const chooseEventIdReducer = (state = null, action: { payload: number; type: any; }) => {

    const eventId = action.payload;

    switch(action.type){
        case 'CHOOSEEVENTID':

        return eventId;

        default:
            return state;
    }
}

export default chooseEventIdReducer;