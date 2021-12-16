import EventsContainerCSS from './eventsContainer.module.scss';
//components
import { EventMainPage } from './eventMainPage/EventMainPage';
import { Searchbar } from '../../searchbar/Searchbar';
import { SelectedEventMainPage } from './selectedEventMainPage/SelectedEventMainPage';
//hooks
import { useAppSelector } from '../../../../hooks';
import { useAppDispatch } from '../../../../hooks';
import { useEffect} from 'react';
import { useLocation } from 'react-router';
//actions
import { selectedEventEventFinder } from '../../../../actions';

export const EventsContainer = () => {

    const location = useLocation();
    const url = location.pathname;
    const eventId = url.split("/")[2];
    const selectedEvent = useAppSelector(state => state.selectEventEventFinderReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        checkIfEventIsSelected();
    }, [])

    const checkIfEventIsSelected = () => {
        if (selectedEvent === null) {
            if (eventId === undefined) {
                return
            } else {
                dispatch(selectedEventEventFinder(parseInt(eventId)))
            }
        }
    }

    const renderEvents = () => {
        if (eventId === undefined || selectedEvent === null) {
            return (
                <>
                    <Searchbar />
                    <div className={EventsContainerCSS.mainContainer__eventsContainer}>
                        <EventMainPage />
                    </div>
                </>
            )
        } else if (selectedEvent !== 0) {
            return (
                <>
                    <SelectedEventMainPage />
                </>
            )
        }
    }

    return (
        <div className={EventsContainerCSS.mainContainer}>
            {renderEvents()}
        </div>
    )
}