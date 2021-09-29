import EventsMenuCSS from './eventsMenu.module.scss';
//components
import { EventType } from './eventsType/EventsType';
import {Event} from './event/Event';

export const EventsMenu = () => {

    

    return(
        <div className={EventsMenuCSS.menuContainer}>
            <EventType/>
            <div className={EventsMenuCSS.menuContainer__event}>
                <div className={EventsMenuCSS.menuContainer__event__description}>Add new  event</div>
                <div className={EventsMenuCSS.menuContainer__event__add}>+</div>
            </div>
            <Event/>
        </div>
    )
}