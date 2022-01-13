const initialState = {
    name: "",
    location: "",
    date: ""
}

const filterEventsMainReducer = (state = initialState, action: { payload: string; type: any; }) => {

    const filter = action.payload;

    switch (action.type) {
        case 'FILTEREVENTSBYNAMEMAIN':
            state = { ...state, name: filter }
            return state;

        case 'FILTEREVENTSBYLOCATIONMAIN':
            state = { ...state, location: filter }
            return state;

        case 'FILTEREVENTSBYDATEMAIN':
            state = { ...state, date: filter }
            return state;

        default:
            return state;
    }
}

export default filterEventsMainReducer;