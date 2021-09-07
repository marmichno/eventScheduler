//css
import MonthScheduleCSS from './monthSchedule.module.scss';
//hooks
import { useEffect, useState, ChangeEvent } from "react";

interface Provider {
    dayDate: number,
    selectedMonth: number | string,
    selectedYear: number,
    dayName: string
}

export const MonthSchedule: React.FC = () => {

    const newDate = new Date();

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 
    'Thursday', 'Friday', 'Saturday'];

    const [arrayOfDays, setArrayOfDays] = useState<Array<Provider>>([]);
    const [selectedMonth, setSelectedMonth] = useState(newDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(newDate.getFullYear());

    useEffect(() => {
        setArrayOfDays(createArrayOfDays(selectedMonth, selectedYear));
    },[])

    const createArrayOfDays = (selectedMonth:number, selectedYear:number) => {

        let arrayOfDays = [];

        let daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

        for(let i = 0; i < daysInMonth; i++){
            let whichDayIsIt = new Date(selectedYear, selectedMonth, i + 1).getDay();

            arrayOfDays.push(
                {
                    dayDate: (i + 1) < 10 ? parseInt(`0${i + 1}`) : (i + 1),
                    selectedMonth: (selectedMonth + 1) < 10 ? `0${selectedMonth + 1}` : (selectedMonth + 1),
                    selectedYear: selectedYear,
                    dayName: days[whichDayIsIt]
                }
            );
        }
        return arrayOfDays;
    }

    const howManyDayFillers = () => {
        const arrayOfFillers = [];
        const index = days.indexOf(arrayOfDays[0].dayName);
        for(let i = 0; i < index; i++){
            arrayOfFillers.push('filler');
        }
        return arrayOfFillers;
    }

    return(
        <div className={MonthScheduleCSS.monthSchedule}>
            <div className={MonthScheduleCSS.monthSchedule__dayNamesContainer}>
                {days.map(val => {
                    return <div className={MonthScheduleCSS.monthSchedule__dayNamesContainer__day}>{val}</div>
                })}
            </div>

            {arrayOfDays.length > 0 ?
            <div className={MonthScheduleCSS.monthSchedule__scheduleContainer}>
                {howManyDayFillers().map(() => {
                    return <div className={MonthScheduleCSS.monthSchedule__dayNamesContainer__filler}></div>
                })}
                {arrayOfDays.map((value, index) => {
                    return <div className={MonthScheduleCSS.monthSchedule__scheduleContainer__day}>{value.dayDate}</div>
                })}
            </div>
            : null}
        </div>
    )
}