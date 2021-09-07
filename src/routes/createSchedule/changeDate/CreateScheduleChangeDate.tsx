//css
import CreateScheduleChangeDateCSS from './createScheduleChangeDate.module.scss';
//components
import {MonthDate} from '../schedule/month/monthDate/MonthDateChange';

export const CreateScheduleChangeDate = () => {
    return(
        <div className={CreateScheduleChangeDateCSS.changeDateContainer}>
            <div className={CreateScheduleChangeDateCSS.changeDateContainer__scheduleType}>
                <div className={CreateScheduleChangeDateCSS.changeDateContainer__scheduleType__options}>
                    day
                </div>
                <div className={CreateScheduleChangeDateCSS.changeDateContainer__scheduleType__options}>
                    month
                </div>
                <div className={CreateScheduleChangeDateCSS.changeDateContainer__scheduleType__options}>
                    week
                </div>
            </div>
                <MonthDate></MonthDate>
        </div>
    )
}