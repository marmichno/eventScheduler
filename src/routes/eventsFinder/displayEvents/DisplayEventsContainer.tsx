import DisplayEventsContainerCSS from './displayEventsContainer.module.scss'
//components
import { EventsContainer } from './events/EventsContainer'
import { EventsMapContainer } from './eventsMap/EventsMapContainer'
//hooks
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
//actions
import { fetchAllUserEvents } from '../../../actions'

export const DisplayEventsContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUserEvents());
    },[])

    return(
        <div className={DisplayEventsContainerCSS.mainContainer}>
            <EventsContainer/>
            <EventsMapContainer/>
        </div>
    )
}