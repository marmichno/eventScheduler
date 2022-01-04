//css
import ScheduleTypeCSS from './scheduleType.module.scss';
//hooks
import { useAppDispatch } from '../../../../hooks';
//actions
import { scheduleType } from '../../../../actions/index';

export const ScheduleType = () => {

    const dispatch = useAppDispatch();

    const changeScheduleType = (e: any) => {

        const resetStyles = () => {
            console.log("fired");
            const options = document.querySelectorAll(`.${ScheduleTypeCSS.scheduleType__options}`);
            options.forEach(val => {
                val.classList.remove(`${ScheduleTypeCSS['scheduleType__options--active']}`);
            });
        }

        const typeOfSchedule = e.currentTarget.dataset.type;
        dispatch(scheduleType(typeOfSchedule));

        resetStyles()
        e.currentTarget.classList.add(`${ScheduleTypeCSS['scheduleType__options--active']}`);
    }

    return (
        <div className={ScheduleTypeCSS.scheduleType}>
            <div className={ScheduleTypeCSS.scheduleType__options} data-type="day" onClick={(e) => changeScheduleType(e)}>
                <h3>day</h3>
            </div>
            <div className={ScheduleTypeCSS.scheduleType__options} data-type="week" onClick={(e) => changeScheduleType(e)}>
                <h3>week</h3>
            </div>
            <div className={`${ScheduleTypeCSS.scheduleType__options} ${ScheduleTypeCSS['scheduleType__options--active']}`} data-type="month" onClick={(e) => changeScheduleType(e)}>
                <h3>month</h3>
            </div>
        </div>
    )
}