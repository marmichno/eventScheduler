//css
import ScheduleTypeCSS from './scheduleType.module.scss';
//hooks
import { useAppDispatch } from '../../../../hooks';
//actions
import { scheduleType } from '../../../../actions/index';

export const ScheduleType = () => {

    const dispatch = useAppDispatch();

    return(
            <div className={ScheduleTypeCSS.scheduleType}>
                <div className={ScheduleTypeCSS.scheduleType__options} onClick={() => dispatch(scheduleType('day'))}>
                    <h3>day</h3>
                </div>
                <div className={`${ScheduleTypeCSS.scheduleType__options} ${ScheduleTypeCSS['scheduleType__options--active']}`} onClick={() => dispatch(scheduleType('month'))}>
                    <h3>month</h3>
                </div>
                <div className={ScheduleTypeCSS.scheduleType__options} onClick={() => dispatch(scheduleType('week'))}>
                    <h3>week</h3>
                </div>
            </div>
    )
}