import EventsContainerCSS from './eventsContainer.module.scss';
//components
import { EventMainPage } from './eventMainPage/EventMainPage';
import { Searchbar } from '../../searchbar/Searchbar';
import { SelectedEventMainPage } from './selectedEventMainPage/SelectedEventMainPage';
//hooks
import { useAppSelector } from '../../../../hooks';
import { useAppDispatch } from '../../../../hooks';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
//actions
import { selectedEventEventFinder } from '../../../../actions';

export const EventsContainer = () => {

    const location = useLocation();
    const url = location.pathname;
    const eventId = url.split("/")[2];

    const renderEvents = () => {
        if (eventId === undefined) {
            return (
                <>
                    <Searchbar />
                    <div className={EventsContainerCSS.mainContainer__eventsContainer}>
                        <EventMainPage />
                    </div>
                </>
            )
        } else if (eventId !== undefined) {
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