import ScheduleManagementCSS from './scheduleManagement.module.scss';
//components
import { SmallCalendar } from '../smallCalendar/SmallCalendar';

export const ScheduleManagement = () => {
    return(
        <div className={ScheduleManagementCSS.scheduleManagementContainer}>
            <SmallCalendar/>
        </div>
    )
}