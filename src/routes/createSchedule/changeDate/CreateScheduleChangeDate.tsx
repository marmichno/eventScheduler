//css
import CreateScheduleChangeDateCSS from './createScheduleChangeDate.module.scss';
//components
import {MonthDate} from '../schedule/month/monthDate/MonthDateChange';
//hooks
import { useAppDispatch } from '../../../hooks';
//actions
import { scheduleType } from '../../../actions/index';

export const CreateScheduleChangeDate = () => {

    const dispatch = useAppDispatch();

    return(
        <div className={CreateScheduleChangeDateCSS.changeDateContainer}>
            <div className={CreateScheduleChangeDateCSS.changeDateContainer__scheduleType}>
                <div className={CreateScheduleChangeDateCSS.changeDateContainer__scheduleType__options} onClick={() => dispatch(scheduleType('day'))}>
                    day
                </div>
                <div className={CreateScheduleChangeDateCSS.changeDateContainer__scheduleType__options} onClick={() => dispatch(scheduleType('month'))}>
                    month
                </div>
                <div className={CreateScheduleChangeDateCSS.changeDateContainer__scheduleType__options} onClick={() => dispatch(scheduleType('week'))}>
                    week
                </div>
            </div>
                <MonthDate></MonthDate>
        </div>
    )
}