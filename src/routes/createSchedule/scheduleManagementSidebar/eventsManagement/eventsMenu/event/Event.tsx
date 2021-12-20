import EventCSS from './event.module.scss';
//hoks
import { useAppSelector } from "../../../../../../hooks"
import { useAppDispatch } from '../../../../../../hooks';
import { useEffect, useState } from 'react';
//actions
import { showEventPopup } from '../../../../../../actions';
import { popupEventType } from '../../../../../../actions';
import { chooseEventId } from '../../../../../../actions';
//requests
import { userScheduleGetEvents } from './requests/userScheduleGetEvents';
//icons
import { BsTrash } from 'react-icons/bs';
import { BiCalendarEdit } from 'react-icons/bi';

interface Event {
    "id": number,
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
    const selectedId = useAppSelector(state => state.chooseEventIdReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetchUserScheduleEvents(selectedType);
    }, [selectedType])

    useEffect(() => {
        console.log(selectedId);
    },[selectedId]);

    const fetchUserScheduleEvents = async (selectedEventType: string) => {
        const response = await userScheduleGetEvents(selectedEventType);
        if (response.status === 200) {
            setUserScheduleEvents(response.data);
        } else {
            setUserScheduleEvents([]);
        }
    }

    const popupEventMgmt = (e:any) => {
        const eventId = e.target.dataset.id;
        const popupType = e.target.dataset.popuptype;

        if(popupType === "delete"){
            dispatch(popupEventType('removeEvent'));
        }else if(popupType === "modify"){
            dispatch(popupEventType('modifyEvent'));
        }
        dispatch(chooseEventId(eventId));
        dispatch(showEventPopup(true));
    }

    const eventRender = () => {
        if (selectedType === "private") {
            return (
                userScheduleEvents.map(val => {
                    return (
                        <div className={EventCSS.eventContainer}>
                            <div className={EventCSS.eventContainer__description}>{val.name}</div>
                            <div
                                data-id={val.id}
                                data-popuptype="delete"
                                className={EventCSS.eventContainer__action}
                                onClick={(e) => popupEventMgmt(e)}>
                                    <BsTrash />
                                </div>
                            <div
                                data-id={val.id}
                                data-popuptype="modify"
                                className={EventCSS.eventContainer__action}
                                onClick={(e) => popupEventMgmt(e)}><BiCalendarEdit />
                            </div>
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
                            <div
                                data-id={val.id}
                                data-popuptype="delete"
                                className={EventCSS.eventContainer__action}
                                onClick={(e) => popupEventMgmt(e)}><BsTrash />
                            </div>
                            <div
                                data-id={val.id}
                                data-popuptype="modify"
                                className={EventCSS.eventContainer__action}
                                onClick={(e) => popupEventMgmt(e)}><BiCalendarEdit />
                            </div>
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