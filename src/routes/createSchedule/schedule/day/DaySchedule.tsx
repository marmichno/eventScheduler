//css
import DayScheduleCSS from './daySchedule.module.scss';
//functions
import { findEventsForSpecificDay } from '../common/findEventsForSpecificDay';
import findSelectedEvent from '../common/findSelectedEvent';
//hooks
import { useAppSelector } from '../../../../hooks';
import { useAppDispatch } from '../../../../hooks';
//actions
import { showEventPopup } from '../../../../actions';
import { selectUserEvent } from '../../../../actions';
import { popupEventType } from '../../../../actions';

export const DaySchedule = () => {

    const allUserEvents = useAppSelector(state => state.allUserEvents);
    const selectedDate = useAppSelector(state => state.scheduleDateReducer);
    const dispatch = useAppDispatch();

    const showEventDetails = (e:any) => {
        dispatch(showEventPopup(true));
        dispatch(selectUserEvent(findSelectedEvent(allUserEvents, e)));
        dispatch(popupEventType("eventDetails"));
    }

    return (
        <div className={DayScheduleCSS.daySchedule}>
            {findEventsForSpecificDay(selectedDate.day, selectedDate.month, selectedDate.year, allUserEvents).map((val, index) => {
                return (
                    <>
                        <div className={DayScheduleCSS.daySchedule__eventContainer} onClick = {(e) => showEventDetails(e)} data-id={val.id}>
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