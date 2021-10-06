import DisplayEventsContainerCSS from './displayEventsContainer.module.scss'
//components
import { EventsContainer } from './events/EventsContainer'
import { EventsMapContainer } from './eventsMap/EventsMapContainer'

export const DisplayEventsContainer = () => {
    return(
        <div className={DisplayEventsContainerCSS.mainContainer}>
            <EventsContainer/>
            <EventsMapContainer/>
        </div>
    )
}