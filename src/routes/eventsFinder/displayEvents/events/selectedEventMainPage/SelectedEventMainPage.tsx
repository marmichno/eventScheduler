import SelectedEventMainPageCSS from './selectedEventMainPage.module.scss';
//actions
import { selectedEventEventFinder } from '../../../../../actions';
//hooks
import { useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocation } from 'react-router';
//icons
import { AiOutlineArrowLeft } from 'react-icons/ai';
//requests
import {getSelectedEventEventsFinder} from './request/getSelectedEventEventsFinder';

interface Event {
    "id": number,
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


export const SelectedEventMainPage = () => {
    
    const history = useHistory();
    const location = useLocation();
    const url = location.pathname;
    const eventId = parseInt(url.split("/")[2]);

    const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

    useEffect(() => {
        fetchEvent()
    },[]);

    const fetchEvent = async () => {
        const response = await getSelectedEventEventsFinder(eventId);
        if(response.status === 200){
            setSelectedEvent(response.data);
        }else{
            setSelectedEvent(null);
        }
    }

    const goBack = () => {
        const location = {
            pathname: '/',
        }
        history.push(location);
    }

    if(selectedEvent !== null){
        return (
            <>
                <div className={SelectedEventMainPageCSS.goBack} onClick={() => goBack()}>
                    <AiOutlineArrowLeft />
                </div>
                <div className={SelectedEventMainPageCSS.mainContainer}>
                    <div className={SelectedEventMainPageCSS.mainContainer__imagesContainer}>
                        <div className={SelectedEventMainPageCSS.mainContainer__imagesContainer__avatar} />
                        <div className={SelectedEventMainPageCSS.mainContainer__imagesContainer__background} />
                    </div>
                    <div className={SelectedEventMainPageCSS.mainContainer__actionsContainer}>
                        <button>join event</button>
                        <button>invite a friend</button>
                        <button>share</button>
                    </div>
                    <div className={SelectedEventMainPageCSS.mainContainer__descriptionContainer}>
                        <h1 className={SelectedEventMainPageCSS.mainContainer__descriptionContainer__eventTitle}>{selectedEvent.name}</h1>
                        <p>{selectedEvent.description}</p>
                    </div>
                </div>
            </>
        )
    }else{
        return <div>empty div</div>
    }
}