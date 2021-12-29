//css
import DayScheduleCSS from './daySchedule.module.scss';
//functions
import { findEventsForSpecificDay } from '../common/findEventsForSpecificDay';
//hooks
import { useAppSelector } from '../../../../hooks';

export const DaySchedule = () => {

    const allUserEvents = useAppSelector(state => state.allUserEvents);
    const selectedDate = useAppSelector(state => state.scheduleDateReducer);

    return (
        <div className={DayScheduleCSS.daySchedule}>
            {findEventsForSpecificDay(selectedDate.day, selectedDate.month, selectedDate.year, allUserEvents).map((val, index) => {
                return (
                    <>
                        <div className={DayScheduleCSS.daySchedule__eventContainer}>
                            <h2>{val.name}</h2>
                            <p>{`Starts at: ${(val.dateFrom).split("T")[1]}`}</p>
                            <p>{`Ends at: ${(val.dataTo).split("T")[1]}`}</p>
                        </div>
                    </>
                )
            })}
        </div>
    )
}