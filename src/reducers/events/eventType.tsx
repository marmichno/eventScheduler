const eventTypeReducer = (state = 'private', action: { payload: string; type: any; }) => {

    const eventType = action.payload;

    switch(action.type){
        case 'SELECTEVENTTYPE':

        return eventType;

        default:
            return state;
    }
}

export default eventTypeReducer;