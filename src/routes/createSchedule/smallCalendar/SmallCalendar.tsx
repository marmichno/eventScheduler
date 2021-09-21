import SmallCalendarCSS from './smallCalendar.module.scss';
//components
import { MonthSchedule } from '../schedule/month/monthSchedule/MonthSchedule';
//hooks
import { useEffect, useState } from "react";
import { useAppSelector } from '../../../hooks';
//functions
import { createArrayOfDays } from '../schedule/common/createArrayOfDays';
import { howManyDayFillers } from '../schedule/common/howManyDayFillers';
//modules
import { days } from '../schedule/common/days';

export const SmallCalendar = () => {

    interface Provider {
        dayDate: number,
        selectedMonth: number | string,
        selectedYear: number,
        dayName: string
    }
    
    const selectedDate = useAppSelector(state => state.scheduleDateReducer);
    const [arrayOfDays, setArrayOfDays] = useState<Array<Provider>>([]);

    useEffect(() => {
        setArrayOfDays(createArrayOfDays(selectedDate.month, selectedDate.year));
    },[selectedDate]);

    return(
        <div className={SmallCalendarCSS.calendarContainer}>
            <div className={SmallCalendarCSS.calendarContainer__dayNamesContainer}>
                {days.map(val => {
                    return <div className={SmallCalendarCSS.calendarContainer__dayNamesContainer__day}>{val[0] + val[1]}</div>
                })}
            </div>

            {arrayOfDays.length > 0 ?
            <div className={SmallCalendarCSS.calendarContainer__scheduleContainer}>
                {howManyDayFillers(arrayOfDays).map(() => {
                    return <div className={SmallCalendarCSS.calendarContainer__dayNamesContainer__filler}></div>
                })}
                {arrayOfDays.map((value, index) => {
                    return <div className={SmallCalendarCSS.calendarContainer__scheduleContainer__day}>{value.dayDate}</div>
                })}
            </div>
            : null}
        </div>
    )
}