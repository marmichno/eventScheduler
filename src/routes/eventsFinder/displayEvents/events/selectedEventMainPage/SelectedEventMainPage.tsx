import SelectedEventMainPageCSS from './selectedEventMainPage.module.scss';
//actions
import { selectedEventEventFinder } from '../../../../../actions';
//hooks
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useLocation } from 'react-router';
//icons
import { AiOutlineArrowLeft } from 'react-icons/ai';
//requests
import { getSelectedEventEventsFinder } from './request/getSelectedEventEventsFinder';

interface Event {
    "id": number,
    "name": string,
    "description": string,
    "dateFrom": string,
    "dataTo": string,
    "maxNumberOfParticipants": number,
    "participantList":
    {
        "id": number,
        "name": string,
        "description": string,
        "email": string,
        "inviteToFriend": string,
        "friendsList":
        {
            "id": number,
            "name": string
        }[]
    }[],
    "address": {
        "houseNumber": string,
        "street": string,
        "city": string,
        "state": string,
        "coordinates": string
    },
    "type": string,
    "availabilityType": string,
    "status": string,
    "reasonForRemoval": string,
    "organizer": {
        "id": number,
        "name": string
    }
}

const initialState = {
    "id": 0,
    "name": "string",
    "description": "string",
    "dateFrom": "2022-01-18T21:13:43.265Z",
    "dataTo": "2022-01-18T21:13:43.265Z",
    "maxNumberOfParticipants": 0,
    "participantList": [
        {
            "id": 0,
            "name": "string",
            "description": "string",
            "email": "string",
            "inviteToFriend": "ALREADY_INVITED",
            "friendsList": [
                {
                    "id": 0,
                    "name": "string"
                }
            ]
        }
    ],
    "address": {
        "houseNumber": "string",
        "street": "string",
        "city": "string",
        "state": "string",
        "coordinates": "string"
    },
    "type": "DEFAULT",
    "availabilityType": "PUBLIC",
    "status": "ACTIVE",
    "reasonForRemoval": "string",
    "organizer": {
        "id": 0,
        "name": "string"
    }
}

export const SelectedEventMainPage = () => {

    const history = useHistory();
    const location = useLocation();
    const url = location.pathname;
    const eventId = parseInt(url.split("/")[2]);

    const [selectedEvent, setSelectedEvent] = useState<Event>(initialState);

    useEffect(() => {
        fetchEvent()
    }, []);

    const fetchEvent = async () => {
        const response = await getSelectedEventEventsFinder(eventId);
        if (response.status === 200) {
            setSelectedEvent(response.data);
        } else {
            setSelectedEvent(initialState);
        }
    }

    const goBack = () => {
        const location = {
            pathname: '/',
        }
        history.push(location);
    }

    if (selectedEvent !== null) {
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
    } else {
        return <div>empty div</div>
    }
}