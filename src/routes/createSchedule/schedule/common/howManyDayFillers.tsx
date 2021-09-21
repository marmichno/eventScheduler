import { days } from "./days";

interface Provider {
    dayDate: number,
    selectedMonth: number | string,
    selectedYear: number,
    dayName: string
}

export const howManyDayFillers = (arrayOfDays:Array<Provider>) => {
    const arrayOfFillers = [];
    const index = days.indexOf(arrayOfDays[0].dayName);
    for(let i = 0; i < index; i++){
        arrayOfFillers.push('filler');
    }
    return arrayOfFillers;
}