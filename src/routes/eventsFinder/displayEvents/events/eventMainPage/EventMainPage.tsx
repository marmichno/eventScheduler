import EventMainPageCSS from './eventMainPage.module.scss';
//icons
import { CategoriesIcons } from '../../../../../components/categoriesIcons/CategoriesIcons';
import {MdDateRange} from 'react-icons/md';
import {MdPlace} from 'react-icons/md';
//hooks
import { useAppSelector } from '../../../../../hooks';
import { useAppDispatch } from '../../../../../hooks';
import { useEffect, useState } from 'react';
//actions
import { selectedEventEventFinder } from '../../../../../actions';
//requests
import {eventsFinderGetEvents} from './request/eventsFinderGetEvents';

interface Event {
    "name": string,
    "description": string,
    "dateFrom": string,
    "dateTo": string,
    "eventAvailabilityType": string,
    "eventType": string
    "maxNumberOfParticipants": number,
    "address": {
        "houseNumber": string,
        "street": string,
        "city": string,
        "state": string,
        "coordinates": string
    },
    "organizer": {
        "id": number,
        "name": string
    }
    "participantList": [],
    "reasonForRemoval": string | null
}

export const EventMainPage = () => {

    const [eventsFinderEvents, setEventsFinderEvents] = useState<Event[]>([]);

    const dispatch = useAppDispatch();
    const eventType = useAppSelector(state => state.selectEventTypeEventFinderReducer)
    //dispatch(selectedEventEventFinder(1));

    useEffect(() => {
        fetchEvents();
    },[eventType]);

    useEffect(() => {
        console.log(eventsFinderEvents);
    },[eventsFinderEvents]);

    const fetchEvents = async () => {
        const response = await eventsFinderGetEvents(eventType);
        if (response.status === 200) {
            setEventsFinderEvents(response.data);
        } else {
            setEventsFinderEvents([]);
        }
    }

    const eventsRender = () => {
        if(eventsFinderEvents.length > 0){
            return(
                eventsFinderEvents.map(val => {
                    return(
                        <div className={EventMainPageCSS.mainContainer} onClick={() => dispatch(selectedEventEventFinder(1))}>
                            <div className={EventMainPageCSS.mainContainer__icon}></div>
                            <div className={EventMainPageCSS.mainContainer__description}>
                                <div><h2>{val.name}</h2></div>
                                <div className={EventMainPageCSS.mainContainer__description__city}>
                                    <div className={EventMainPageCSS.mainContainer__description__city__text}><p>{val.address.city}</p></div>
                                    <div className={EventMainPageCSS.mainContainer__description__city__icon}><MdPlace/></div>
                                </div>
                                <div className={EventMainPageCSS.mainContainer__description__time}>
                                    <div className={EventMainPageCSS.mainContainer__description__time__text}><p>{val.dateFrom}</p></div>
                                    <div className={EventMainPageCSS.mainContainer__description__time__icon}><MdDateRange/></div>
                                </div>
                            </div>
                            <div className={EventMainPageCSS.mainContainer__additionalInfo}>
                                <div className={EventMainPageCSS.mainContainer__additionalInfo__availability}>{val.participantList.length}/{val.maxNumberOfParticipants}</div>
                                <div className={EventMainPageCSS.mainContainer__additionalInfo__category}><CategoriesIcons color="red" size="1.5rem" iconType="music"/></div>
                            </div>
                        </div>
                    )
                })
            )
        }else{
            return <></>
        }
    }


    return(
        <>
            {eventsRender()}
        </>
    )
}