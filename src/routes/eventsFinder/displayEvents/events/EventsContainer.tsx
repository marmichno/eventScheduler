import EventsContainerCSS from './eventsContainer.module.scss';
//components
import { EventMainPage } from './eventMainPage/EventMainPage';

export const EventsContainer = () => {
    return(
        <div className={EventsContainerCSS.mainContainer}>
            <EventMainPage/>
            <EventMainPage/>
            <EventMainPage/>
            <EventMainPage/>
            <EventMainPage/>
            <EventMainPage/>
            <EventMainPage/>
        </div>
    )
}