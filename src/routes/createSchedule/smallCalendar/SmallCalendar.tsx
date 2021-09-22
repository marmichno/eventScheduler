import SmallCalendarCSS from './smallCalendar.module.scss';
//hooks
import { useEffect, useState } from "react";
import { useAppDispatch } from '../../../hooks';
//functions
import { createArrayOfDays } from '../schedule/common/createArrayOfDays';
import { howManyDayFillers } from '../schedule/common/howManyDayFillers';
//actions
import { setDate } from '../../../actions';
//modules
import { days } from '../schedule/common/days';
import {monthNames} from '../schedule/common/monthNames';

interface Provider {
    dayDate: number,
    selectedMonth: number | string,
    selectedYear: number,
    dayName: string
}

interface Date {
    day: number,
    month: number,
    week: number,
    year: number
}

export const SmallCalendar = () => {
    
    const dispatch = useAppDispatch();

    const newDate = new Date();

    const [selectedMonth, setSelectedMonth] = useState(newDate.getMonth());
    const [selectedYear, setSelectedYear] = useState(newDate.getFullYear());
    const [arrayOfDays, setArrayOfDays] = useState<Array<Provider>>([]);

    useEffect(() => {
        setArrayOfDays(createArrayOfDays(selectedMonth, selectedYear));
    },[selectedMonth, selectedYear]);

    const changeMonth = (direction:string) => {
        if(direction === "next"){
            if(selectedMonth !== 11){
                setSelectedMonth(selectedMonth + 1);
            }else{
                setSelectedMonth(0);
                setSelectedYear(selectedYear + 1);
            }
        }else if(direction === "previous"){
            if(selectedMonth !== 0){
                setSelectedMonth(selectedMonth - 1);
            }else{
                setSelectedMonth(11);
                setSelectedYear(selectedYear - 1);
            }
        }
    }

    const setNewDate = (e:any) => {
        const day = parseInt(e.target.dataset.day);
        const date:Date = {
            day: day + 1,
            month: selectedMonth,
            week: 0,
            year: selectedYear
        }
        dispatch(setDate(date))
    }

    return(
        <div className={SmallCalendarCSS.calendarContainer}>
            <div className={SmallCalendarCSS.calendarContainer__changeDateContainer}>
                <div onClick={() => changeMonth("previous")}>&#8592;</div>
                {`${monthNames[selectedMonth]}, ${selectedYear}`}
                <div onClick={() => changeMonth("next")}>&#8594;</div>
            </div>
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
                    return <div onClick={setNewDate} data-day={index} className={SmallCalendarCSS.calendarContainer__scheduleContainer__day}>{value.dayDate}</div>
                })}
            </div>
            : null}
        </div>
    )
}