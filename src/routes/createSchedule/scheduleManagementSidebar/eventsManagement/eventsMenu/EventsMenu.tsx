import EventsMenuCSS from './eventsMenu.module.scss';
//components
import { AddEvent } from './addEvent/AddEvent';
import { EventType } from './eventsType/EventsType';
import {Event} from './event/Event';

export const EventsMenu = () => {

    return(
        <div className={EventsMenuCSS.menuContainer}>
            <EventType/>
            <AddEvent/>
            <Event/>
        </div>
    )
}