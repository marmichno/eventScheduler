const popupEventTypeReducer = (state = '', action: { payload: string; type: any; }) => {

    const popupType = action.payload;

    switch(action.type){
        case 'SELECTPOPUPTYPE':

        console.log(popupType);
        return popupType;

        default:
            return state;
    }
}

export default popupEventTypeReducer;