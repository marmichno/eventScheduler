import EventCSS from './event.module.scss';
//hoks
import { useAppSelector } from "../../../../../../hooks"
import { useAppDispatch } from '../../../../../../hooks';
import { useEffect, useState } from 'react';
//actions
import { showEventPopup } from '../../../../../../actions';
import { popupEventType } from '../../../../../../actions';
//requests
import { userScheduleGetEvents } from './requests/userScheduleGetEvents';
//icons
import { BsTrash } from 'react-icons/bs';
import { BiCalendarEdit } from 'react-icons/bi';

interface Event {
    "name": string,
    "description": string,
    "timeFrom": string,
    "dateFrom": string,
    "timeTo": string,
    "dateTo": string,
    "eventAvailabilityType": string,
    "eventType": string
    "maxNumberOfParticipants": number,
    "eventAddress": {
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
    "participantsList": [],
    "reasonForRemoval": string | null
}

export const Event = () => {

    const [userScheduleEvents, setUserScheduleEvents] = useState<Event[]>([]);

    const selectedType = useAppSelector(state => state.eventTypeReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchUserScheduleEvents(selectedType);
    }, [selectedType])

    const fetchUserScheduleEvents = async (selectedEventType: string) => {
        const response = await userScheduleGetEvents(selectedEventType);
        if (response.status === 200) {
            setUserScheduleEvents(response.data);
        } else {
            setUserScheduleEvents([]);
        }
    }

    const removeEvent = () => {
        dispatch(popupEventType('removeEvent'))
        dispatch(showEventPopup(true));
    }

    const modifyEvent = () => {
        dispatch(popupEventType('modifyEvent'))
        dispatch(showEventPopup(true));
    }

    const eventRender = () => {
        if (selectedType === "private") {
            return (
                userScheduleEvents.map(val => {
                    return (
                        <div className={EventCSS.eventContainer}>
                            <div className={EventCSS.eventContainer__description}>{val.name}</div>
                            <div className={EventCSS.eventContainer__action} onClick={() => removeEvent()}><BsTrash /></div>
                            <div className={EventCSS.eventContainer__action} onClick={() => modifyEvent()}><BiCalendarEdit /></div>
                        </div>
                    )
                })
            )
        } else if (selectedType === "public") {
            return (
                userScheduleEvents.map(val => {
                    return (
                        <div className={EventCSS.eventContainer}>
                            <div className={EventCSS.eventContainer__description}>{val.name}</div>
                            <div className={EventCSS.eventContainer__action} onClick={() => removeEvent()}><BsTrash /></div>
                            <div className={EventCSS.eventContainer__action} onClick={() => modifyEvent()}><BiCalendarEdit /></div>
                        </div>
                    )
                })
            )
        }
    }

    return (
        <>
            {eventRender()}
        </>
    )
}