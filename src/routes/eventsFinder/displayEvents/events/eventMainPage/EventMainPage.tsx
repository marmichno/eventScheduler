import EventMainPageCSS from './eventMainPage.module.scss';
//icons
import { CategoriesIcons } from '../../../../../components/categoriesIcons/CategoriesIcons';
import { MdDateRange } from 'react-icons/md';
import { MdPlace } from 'react-icons/md';
//hooks
import { useAppSelector } from '../../../../../hooks';
import { useHistory } from 'react-router-dom';
//actions

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

export const EventMainPage = () => {

    const history = useHistory();
    const eventType = useAppSelector(state => state.selectEventTypeEventFinderReducer);
    const allUserEvents = useAppSelector(state => state.allUserEvents);
    const eventFilters = useAppSelector(state => state.filterEventsMain);

    const chooseEvent = (e: any) => {
        const eventId = e.currentTarget.dataset.eventid;
        if (eventId !== undefined) {
            const location = {
                pathname: `/event/${eventId}`
            }
            history.push(location);
        }
    }

    const filterEvent = (event: Event) => {

        const checkEventName = (eventName: string) => {
            return eventName.toLowerCase().includes(eventFilters.name);
        }

        const checkEventCity = (eventCity: string) => {
            return eventCity.toLowerCase().includes(eventFilters.location);
        }

        const checkEventDate = (eventDate: string) => {
            return eventDate.toLowerCase().includes(eventFilters.date);
        }

        // if event is active and same type as selected in options
        if (event.availabilityType === eventType && event.status === "ACTIVE") {
            // if any filter is applied
            if (eventFilters.name.length > 0 || eventFilters.location.length > 0 || eventFilters.date.length > 0) {
                // if all three filters are set
                if (eventFilters.name.length > 0 && eventFilters.location.length > 0 && eventFilters.date.length > 0) {
                    let numOfTrue = 0;
                    checkEventName(event.name) ? numOfTrue += 1 : null;
                    checkEventCity(event.address.city) ? numOfTrue += 1 : null;
                    checkEventDate(event.dateFrom) ? numOfTrue += 1 : null;
                    return numOfTrue === 3;
                    // if name and location are set
                } else if (eventFilters.name.length > 0 && eventFilters.location.length > 0) {
                    let numOfTrue = 0;
                    checkEventName(event.name) ? numOfTrue += 1 : null;
                    checkEventCity(event.address.city) ? numOfTrue += 1 : null;
                    return numOfTrue === 2;
                    // if name and date are set
                } else if (eventFilters.name.length > 0 && eventFilters.date.length > 0) {
                    let numOfTrue = 0;
                    checkEventName(event.name) ? numOfTrue += 1 : null;
                    checkEventDate(event.dateFrom) ? numOfTrue += 1 : null;
                    return numOfTrue === 2;
                    // if location and date are set
                } else if (eventFilters.date.length > 0 && eventFilters.location.length) {
                    let numOfTrue = 0;
                    checkEventCity(event.address.city) ? numOfTrue += 1 : null;
                    checkEventDate(event.dateFrom) ? numOfTrue += 1 : null;
                    return numOfTrue === 2;
                    // if only name is set
                } else if (eventFilters.name.length > 0) {
                    return checkEventName(event.name);
                    // if only location is set
                } else if (eventFilters.location.length > 0) {
                    return checkEventCity(event.address.city);
                    // if only date is set
                } else if (eventFilters.date.length > 0) {
                    return checkEventDate(event.dateFrom);
                }
                // if no filters are set
            } else {
                return true;
            }
            // if event is active or wrong type
        } else {
            return false;
        }
    }

    const eventsRender = () => {
        if (allUserEvents.fetchStatus === "FETCH_SUCCESS") {
            return (
                allUserEvents['data'].map(val => {
                    if (filterEvent(val)) {
                        return (
                            <div className={EventMainPageCSS.mainContainer} data-eventid={val.id} onClick={(e) => chooseEvent(e)}>
                                <div className={EventMainPageCSS.mainContainer__icon}></div>
                                <div className={EventMainPageCSS.mainContainer__description}>
                                    <div><h2>{val.name}</h2></div>
                                    <div className={EventMainPageCSS.mainContainer__description__city}>
                                        <div className={EventMainPageCSS.mainContainer__description__city__text}><p>{val.address.city}</p></div>
                                        <div className={EventMainPageCSS.mainContainer__description__city__icon}><MdPlace /></div>
                                    </div>
                                    <div className={EventMainPageCSS.mainContainer__description__time}>
                                        <div className={EventMainPageCSS.mainContainer__description__time__text}><p>{val.dateFrom}</p></div>
                                        <div className={EventMainPageCSS.mainContainer__description__time__icon}><MdDateRange /></div>
                                    </div>
                                </div>
                                <div className={EventMainPageCSS.mainContainer__additionalInfo}>
                                    <div className={EventMainPageCSS.mainContainer__additionalInfo__availability}>{val.participantList.length}/{val.maxNumberOfParticipants}</div>
                                    <div className={EventMainPageCSS.mainContainer__additionalInfo__category}><CategoriesIcons color="red" size="1.5rem" iconType="music" /></div>
                                </div>
                            </div>
                        )
                    }
                })
            )

        } else if (allUserEvents.fetchStatus === "BEFORE_FETCH") {
            return <></>
        } else if (allUserEvents.fetchStatus === "FETCH_ERROR") {
            <h2>Something went wrong :c</h2>
        }
    }

    return (
        <>
            {eventsRender()}
        </>
    )
}