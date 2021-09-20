//css
import CreateScheduleChangeDateCSS from './createScheduleChangeDateContainer.module.scss';
//components
import {ChangeDate} from './changeDate/ChangeDate';
import {ScheduleType} from './scheduleType/ScheduleType'
//hooks
import { useAppDispatch } from '../../../hooks';
//actions
import { scheduleType } from '../../../actions/index';

export const CreateScheduleChangeDate = () => {

    const dispatch = useAppDispatch();

    return(
        <div className={CreateScheduleChangeDateCSS.changeDateContainer}>
            <ScheduleType></ScheduleType>
            <ChangeDate></ChangeDate>
        </div>
    )
}