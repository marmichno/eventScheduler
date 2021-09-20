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
                    day
                </div>
                <div className={ScheduleTypeCSS.scheduleType__options} onClick={() => dispatch(scheduleType('month'))}>
                    month
                </div>
                <div className={ScheduleTypeCSS.scheduleType__options} onClick={() => dispatch(scheduleType('week'))}>
                    week
                </div>
            </div>
    )
}