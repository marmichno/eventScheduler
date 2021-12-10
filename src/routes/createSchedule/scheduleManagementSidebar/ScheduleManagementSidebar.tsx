import ScheduleManagementSidebarCSS from './scheduleManagementSidebar.module.scss';
//components
import { SmallCalendar } from './smallCalendar/SmallCalendar';
import { EventsMenu } from './eventsManagement/eventsMenu/EventsMenu';
import { ModifyEventPopupMaganement } from './eventsManagement/modifyEventPopup/ModifyEventPopupMaganement';
//hooks
import { useAppSelector } from '../../../hooks';

export const ScheduleManagementSidebar = () => {

    const showPopup = useAppSelector(state => state.showEventPopupReducer)

    return(
        <div className={ScheduleManagementSidebarCSS.scheduleManagementContainer}>
            <SmallCalendar/>
            <EventsMenu/>
            {showPopup ? <ModifyEventPopupMaganement/> : null}
        </div>
    )
}