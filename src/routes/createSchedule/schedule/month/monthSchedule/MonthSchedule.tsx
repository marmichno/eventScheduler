//css
import MonthScheduleCSS from './monthSchedule.module.scss';
//hooks
import { useEffect, useState } from "react";
import { useAppSelector } from '../../../../../hooks';
//functions
import {createArrayOfDays} from '../../common/createArrayOfDays';
import { howManyDayFillers } from '../../common/howManyDayFillers';
//modules
import {days} from '../../common/days';

interface Provider {
    dayDate: number,
    selectedMonth: number | string,
    selectedYear: number,
    dayName: string
}

export const MonthSchedule: React.FC = () => {

    const selectedDate = useAppSelector(state => state.scheduleDateReducer);
    const [arrayOfDays, setArrayOfDays] = useState<Array<Provider>>([]);

    useEffect(() => {
        setArrayOfDays(createArrayOfDays(selectedDate.month, selectedDate.year));
    },[selectedDate]);

    return(
        <div className={MonthScheduleCSS.monthSchedule}>
            <div className={MonthScheduleCSS.monthSchedule__dayNamesContainer}>
                {days.map(val => {
                    return <div className={MonthScheduleCSS.monthSchedule__dayNamesContainer__day}>{val}</div>
                })}
            </div>

            {arrayOfDays.length > 0 ?
            <div className={MonthScheduleCSS.monthSchedule__scheduleContainer}>
                {howManyDayFillers(arrayOfDays).map(() => {
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