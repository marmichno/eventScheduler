const newDate = new Date();

const currentYear = newDate.getFullYear();
const currentMonth = newDate.getMonth();
const currentDay = newDate.getDay();

const initialState = {
    selectedDay: currentDay,
    selectedMonth: currentMonth,
    selectedYear: currentYear
}


const scheduleDateReducer = (state = initialState, action: { payload: any; type: any; }) => {

    const timeDirection = action.payload;

    switch(action.type){
        case 'MONTH':

        if(timeDirection === "next"){
            if(state.selectedMonth <= 10){
                state.selectedMonth += 1;
            }else{
                state.selectedYear += 1;
                state.selectedMonth = 0;
            }
        }else if(timeDirection === "previous"){
            if(state.selectedMonth !== 0){
                state.selectedMonth -= 1;
            }else{
                state.selectedMonth = 11;
                state.selectedYear -= 1;
            }
        }

        return state;

        default:
            return state;
    }
}


export default scheduleDateReducer;