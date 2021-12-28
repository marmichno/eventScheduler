//css
import WeekScheduleCSS from './weekSchedule.module.scss';
//hooks
import { useEffect, useState, useCallback } from "react";
import { useAppSelector } from '../../../../../hooks';
//functions
import {createArrayOfDays} from '../../common/createArrayOfDays';
import { findEventsForSpecificDay } from '../../common/findEventsForSpecificDay';
//modules
import {days} from '../../common/days';

interface Provider {
    dayDate: number,
    selectedMonth: number | string,
    selectedYear: number,
    dayName: string
}

export const WeekSchedule: React.FC = () => {

    const allUserEvents = useAppSelector(state => state.allUserEvents);
    const selectedDate = useAppSelector(state => state.scheduleDateReducer);

    const [arrayOfDays, setArrayOfDays] = useState<Array<Array<Provider>>>([]);

    useEffect(() => {
        const allDaysArray = createArrayOfDays(selectedDate.month, selectedDate.year)
        let newArray = [];
        let i = 0;
        for(let j = allDaysArray.length + 1; (i + 2 < j); i += 7){
            newArray.push(allDaysArray.slice(i, i + 7));
        }
        setArrayOfDays(newArray);
    },[selectedDate]);
    
    useEffect(() => {
        console.log(arrayOfDays);
    },[arrayOfDays]);

    if(arrayOfDays.length > 0 && arrayOfDays[selectedDate.week] !== undefined){
        return(
            <div className={WeekScheduleCSS.weekSchedule}>
                <div className={WeekScheduleCSS.weekSchedule__dayNamesContainer}>
                    {arrayOfDays[selectedDate.week].map(val => {
                        return <div className={WeekScheduleCSS.weekSchedule__dayNamesContainer__day}>{val.dayName}</div>
                    })}
                </div>
                <div className={WeekScheduleCSS.weekSchedule__scheduleContainer}>
                {arrayOfDays[selectedDate.week].map((value, index) => {
                    return (
                        <div className={WeekScheduleCSS.weekSchedule__scheduleContainer__day}>
                            <div className={WeekScheduleCSS.weekSchedule__scheduleContainer__day__dateContainer}>
                                <p>{value.dayDate}</p>
                            </div>
                            <div className={WeekScheduleCSS.weekSchedule__scheduleContainer__day__eventContainer}>
                                {findEventsForSpecificDay(value.dayDate, selectedDate.month, value.selectedYear, allUserEvents).map(val => {
                                    return <div className={WeekScheduleCSS.weekSchedule__scheduleContainer__day__eventContainer__event}><p>{val.name}</p></div>
                                })}
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
        )
    }else{
        return <div className={WeekScheduleCSS.weekSchedule}></div>
    }
}