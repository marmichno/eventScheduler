//css
import ChangeDateCSS from './changeDate.module.scss';
//hooks
import { useAppSelector } from '../../../../hooks';
import { useAppDispatch } from '../../../../hooks';
//actions
import { dayChangeDate, monthChangeDate } from '../../../../actions';
import { weekChangeDate } from '../../../../actions';
//modules
import { monthNames } from '../../schedule/common/monthNames';

export const ChangeDate = () => {

    const dispatch = useAppDispatch();

    const selectedDate = useAppSelector(state => state.scheduleDateReducer);
    const scheduleType = useAppSelector(state => state.scheduleTypeReducer);

    const renderDate = () => {
        switch(scheduleType){
            case "month":
                return <div className={ChangeDateCSS.dateContainer__date}>{`${monthNames[selectedDate.month]}, ${selectedDate.year}`}</div>
            case "week":
                return <div className={ChangeDateCSS.dateContainer__date}>{`${monthNames[selectedDate.month]}, ${selectedDate.year} week:${selectedDate.week}`}</div>
            case "day":
                return <div className={ChangeDateCSS.dateContainer__date}>{`${monthNames[selectedDate.month]}, ${selectedDate.year} day:${selectedDate.day}`}</div>
        }
    }

    const modifyDate = (direction:string) => {
        switch(scheduleType){
            case "month":
                if(direction === "next"){
                    dispatch(monthChangeDate('next'))
                }else if(direction === "previous"){
                    dispatch(monthChangeDate('previous'))
                }
                break;
            case "week":
                if(direction === "next"){
                    dispatch(weekChangeDate('next'))
                }else if(direction ==="previous"){
                    dispatch(weekChangeDate('previous'))
                }
                break;
            case "day":
                if(direction === "next"){
                    dispatch(dayChangeDate('next'))
                }else if(direction === "previous"){
                    dispatch(dayChangeDate('previous'))
                }
        }
    }

    return(
        <div className={ChangeDateCSS.dateContainer}>
            <div className={ChangeDateCSS.dateContainer__arrow} onClick={() => modifyDate("previous")}>&#8592;</div>
            {renderDate()}
            <div className={ChangeDateCSS.dateContainer__arrow} onClick={() => modifyDate("next")}>&#8594;</div>
        </div>
    )
}