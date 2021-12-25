const allUserEventsReducer = (state = null, action: { payload: any; type: any; }) => {

    const events = action.payload;

    switch(action.type){
        case 'FETCHALLUSEREVENTS':

        return events;

        default:
            return state;
    }
}

export default allUserEventsReducer;