const newDate = new Date();

const currentYear = newDate.getFullYear();
const currentMonth = newDate.getMonth();
const currentDay = newDate.getDay();

const initialState = {
    day: currentDay,
    month: currentMonth,
    year: currentYear
}


const scheduleDateReducer = (state = initialState, action: { payload: any; type: any; }) => {

    const timeDirection = action.payload;

    switch(action.type){
        case 'MONTHCHANGEDATE':

        if(timeDirection === "next"){
            if(state.month <= 10){
                state = { ...state, month: state.month + 1 }
            }else{
                state = { ...state, year: state.year + 1 }
                state = { ...state, month: 0 }
                state.month = 0;
            }
        }else if(timeDirection === "previous"){
            if(state.month !== 0){
                state = { ...state, month: state.month - 1 }
            }else{
                state = { ...state, month: 11 }
                state = { ...state, year: state.year - 1}
            }
        }

        return state;

        default:
            return state;
    }
}


export default scheduleDateReducer;