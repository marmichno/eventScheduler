//css
import ChangeDateCSS from './changeDate.module.scss';
//hooks
import { useAppSelector } from '../../../../hooks';
import { useAppDispatch } from '../../../../hooks';
//actions
import { monthChangeDate } from '../../../../actions';
import { weekChangeDate } from '../../../../actions';

export const ChangeDate = () => {

    const dispatch = useAppDispatch();

    const selectedDate = useAppSelector(state => state.scheduleDateReducer);
    const scheduleType = useAppSelector(state => state.scheduleTypeReducer);

    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

    const renderDate = () => {
        switch(scheduleType){
            case "month":
                return <div className={ChangeDateCSS.dateContainer__date}>{`${monthNames[selectedDate.month]}, ${selectedDate.year}`}</div>
            case "week":
                return <div className={ChangeDateCSS.dateContainer__date}>{`${monthNames[selectedDate.month]}, ${selectedDate.year} week:${selectedDate.week}`}</div>
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