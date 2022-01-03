//css
import MonthScheduleCSS from './monthSchedule.module.scss';
//hooks
import { useEffect, useState } from "react";
import { useAppSelector } from '../../../../../hooks';
import { useAppDispatch } from '../../../../../hooks';
//actions
import { selectUserEvent } from '../../../../../actions';
import { popupEventType } from '../../../../../actions';
import { showEventPopup } from '../../../../../actions';
//functions
import { createArrayOfDays } from '../../common/createArrayOfDays';
import { howManyDayFillers } from '../../common/howManyDayFillers';
import { findEventsForSpecificDay } from '../../common/findEventsForSpecificDay';
import findSelectedEvent from '../../common/findSelectedEvent';
//modules
import { days } from '../../common/days';

interface Provider {
    dayDate: number,
    selectedMonth: number,
    selectedYear: number,
    dayName: string
}

export const MonthSchedule: React.FC = () => {

    const selectedDate = useAppSelector(state => state.scheduleDateReducer);
    const allUserEvents = useAppSelector(state => state.allUserEvents);
    const [arrayOfDays, setArrayOfDays] = useState<Array<Provider>>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setArrayOfDays(createArrayOfDays(selectedDate.month, selectedDate.year));
    }, [selectedDate]);

    const showEventDetails = (e:any) => {
        dispatch(showEventPopup(true));
        dispatch(selectUserEvent(findSelectedEvent(allUserEvents, e)));
        dispatch(popupEventType("eventDetails"));
    }

    return (
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
                        return (
                            <div className={MonthScheduleCSS.monthSchedule__scheduleContainer__day}>
                                <div className={MonthScheduleCSS.monthSchedule__scheduleContainer__day__dateContainer}>
                                    <p>{value.dayDate}</p>
                                </div>
                                <div className={MonthScheduleCSS.monthSchedule__scheduleContainer__day__eventContainer}>
                                    {findEventsForSpecificDay(value.dayDate, value.selectedMonth, value.selectedYear, allUserEvents).map(val => {
                                        return <div 
                                        onClick = {(e) => showEventDetails(e)}
                                        data-id={val.id} className={MonthScheduleCSS.monthSchedule__scheduleContainer__day__eventContainer__event}>
                                            <p>{val.name}</p>
                                        </div>
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
                : null}
        </div>
    )
}