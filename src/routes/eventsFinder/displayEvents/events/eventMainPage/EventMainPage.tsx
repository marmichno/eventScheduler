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

    const history = useHistory();
    const eventType = useAppSelector(state => state.selectEventTypeEventFinderReducer);
    const allUserEvents = useAppSelector(state => state.allUserEvents);

    const chooseEvent = (e: any) => {
        const eventId = e.currentTarget.dataset.eventid;
        if (eventId !== undefined) {
            const location = {
                pathname: `/event/${eventId}`
            }
            history.push(location);
        }
    }

    const eventsRender = () => {
        if (allUserEvents.fetchStatus === "FETCH_SUCCESS") {
            return (
                allUserEvents['data'].map(val => {
                    if (val.eventAvailabilityType === eventType && val.eventStatus === "ACTIVE") {
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

    return(
        <>
            {eventsRender()}
        </>
    )
}