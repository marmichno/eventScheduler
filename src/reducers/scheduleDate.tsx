const newDate = new Date();

const currentYear = newDate.getFullYear();
const currentMonth = newDate.getMonth();
const currentWeek = 0;
const currentDay = newDate.getDay();

const initialState = {
    day: currentDay,
    month: currentMonth,
    week: currentWeek,
    year: currentYear
}


const scheduleDateReducer = (state = initialState, action: { payload: any; type: any; }) => {

    const payload = action.payload;

    switch(action.type){
        case 'MONTHCHANGEDATE':

        if(payload === "next"){
            if(state.month <= 10){
                state = { ...state, month: state.month + 1 }
            }else{
                state = { ...state, year: state.year + 1 }
                state = { ...state, month: 0 }
                state.month = 0;
            }
        }else if(payload === "previous"){
            if(state.month !== 0){
                state = { ...state, month: state.month - 1 }
            }else{
                state = { ...state, month: 11 }
                state = { ...state, year: state.year - 1}
            }
        }
        console.log(state);
        return state;

        case 'WEEKCHANGEDATE':

        if(payload === "next"){
            if(state.week === 3 && state.month === 2){
                state = { ...state, month: state.month + 1 }
                state = { ...state, week: 0 }
            }else if(state.week === 4 && state.month !== 2 && state.month !== 11){
                state = { ...state, month: state.month + 1 }
                state = { ...state, week: 0 }
            }else if(state.week === 4 && state.month !== 1 && state.month === 11){
                state = { ...state, year: state.year + 1 }
                state = { ...state, month: 0 }
                state = { ...state, week: 0 }
            }else if(state.week === 4 && state.month !== 1 && state.month !== 11){
                state = { ...state, month: state.month + 1 }
                state = { ...state, week: 0 }
            }else{
                state = { ...state, week: state.week + 1}
            }
        }else if(payload === "previous"){
            if(state.week === 0 && state.month === 2){
                state = { ...state, month: state.month - 1 }
                state = { ...state, week: 3 }
            }else if(state.week === 0 && state.month !== 2 && state.month !== 0){
                state = { ...state, month: state.month - 1 }
                state = { ...state, week: 4 }
            }else if(state.week === 0 && state.month === 0){
                state = { ...state, year: state.year - 1 }
                state = { ...state, month: 11 }
                state = { ...state, week: 4 }
            }else{
                state = { ...state, week: state.week - 1}
            }
        }

        return state;

        case 'SETDATE':

        state = payload;

        console.log(state);
        return state;

        default:
            return state;
    }
}


export default scheduleDateReducer;