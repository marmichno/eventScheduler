const scheduleTypeReducer = (state = 'month', action: { payload: any; type: any; }) => {

    const scheduleType = action.payload;

    switch(action.type){
        case 'SELECTSCHEDULETYPE':

        return scheduleType;

        default:
            return state;
    }
}


export default scheduleTypeReducer;