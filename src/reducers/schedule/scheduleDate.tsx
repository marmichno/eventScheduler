const newDate = new Date();

const currentYear = newDate.getFullYear();
const currentMonth = newDate.getMonth();
const currentWeek = 0;
const currentDay = newDate.getDay();

const whichWeekIsIt = (day:number) => {
    let week = 0;
    let i;
    for(i=7;i<= 35;i+=7){
        if(day <= i && day >= i - 7){
            week = (i / 7) - 1;
            break;
        }
    }
    return week;
}

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
        state = { ...state, day: 1}
        return state;

        case 'WEEKCHANGEDATE':

        if(payload === "next"){
            if(state.week === 3 && state.month === 1){
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
            }else if(state.week === 0 && state.month !== 0){
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

        state = { ...state, day: 1}
        return state

        case 'DAYCHANGEDATE':

        const daysInMonth = (month:number) => new Date(state.year, month + 1, 0).getDate();

        if(payload === "next"){
            if(state.day === daysInMonth(state.month)){
                if(state.month === 11){
                    state = {...state, month: 0}
                    state = {...state, day: 1}
                    state = {... state, year: state.year + 1}
                }else{
                    state = {...state, month: state.month + 1}
                    state = {...state, day: 1};
                }
            }else{
                state = {...state, day: state.day + 1};
            }
        }else if(payload === "previous"){
            if(state.day === 1){
                if(state.month === 0){
                    state = {...state, month: 11}
                    state = {...state, day: 31}
                    state = {...state, year: state.year - 1}
                }else{
                    state = {...state, month: state.month - 1}
                    state = {...state, day: daysInMonth(state.month)}
                }
            }else{
                state = {...state, day: state.day - 1}
            }
        }

        state = {...state, week: whichWeekIsIt(state.day)}
        return state

        case 'SETDATE':

        state = payload;

        state = {...state, week: whichWeekIsIt(state.day)}
        return state;

        default:
            return state;
    }
}


export default scheduleDateReducer;