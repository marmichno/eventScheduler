const showEventPopupReducer = (state = false, action: { payload: boolean; type: any; }) => {

    const showEventPopup = action.payload;

    switch(action.type){
        case 'SHOWEVENTPOPUP':

        return showEventPopup;

        default:
            return state;
    }
}

export default showEventPopupReducer;