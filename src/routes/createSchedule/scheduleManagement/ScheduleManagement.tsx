import ScheduleManagementCSS from './scheduleManagement.module.scss';
//components
import { SmallCalendar } from '../smallCalendar/SmallCalendar';
import { EventsMenu } from '../eventsManagement/eventsMenu/EventsMenu';
import { ModifyEventPopupMaganement } from '../eventsManagement/modifyEventPopup/ModifyEventPopupMaganement';
//hooks
import { useAppSelector } from '../../../hooks';

export const ScheduleManagement = () => {

    const showPopup = useAppSelector(state => state.showEventPopupReducer)

    return(
        <div className={ScheduleManagementCSS.scheduleManagementContainer}>
            <SmallCalendar/>
            <EventsMenu/>
            {showPopup ? <ModifyEventPopupMaganement/> : null}
        </div>
    )
}