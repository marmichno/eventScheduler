import ScheduleManagementCSS from './scheduleManagement.module.scss';
//components
import { SmallCalendar } from '../smallCalendar/SmallCalendar';
import { EventsMenu } from '../eventsManagement/eventsMenu/EventsMenu';

export const ScheduleManagement = () => {
    return(
        <div className={ScheduleManagementCSS.scheduleManagementContainer}>
            <SmallCalendar/>
            <EventsMenu/>
        </div>
    )
}