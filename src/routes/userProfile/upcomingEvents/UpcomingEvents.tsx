import UpcomingEventsCSS from './upcomingEvents.module.scss';
//hooks
import { useState } from 'react';

export const UpcomingEvents = () => {

    const [upcomingEvents, setUpcomingEvents] = useState([
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        },
        {
            "eventName": "some kind of event",
            "eventDate": "2021-11-23",
            "eventTime": "18:30"
        }
    ])

    return (
        <div className={UpcomingEventsCSS.mainContainer}>
            <div className={UpcomingEventsCSS.mainContainer__contentDescription}>
                <h2>Upcoming events</h2>
            </div>
            <div className={UpcomingEventsCSS.mainContainer__eventsContainer}>
                {upcomingEvents.map(val => {
                    return (
                        <div className={UpcomingEventsCSS.mainContainer__eventsContainer__event}>
                            <div className={UpcomingEventsCSS.mainContainer__eventsContainer__event__eventIcon}>
                                <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                            </div>
                            <div className={UpcomingEventsCSS.mainContainer__eventsContainer__event__eventDescription}>
                                <div className={UpcomingEventsCSS.mainContainer__eventsContainer__event__eventDescription__eventName}>
                                    <h2>{val.eventName}</h2>
                                </div>
                                <div className={UpcomingEventsCSS.mainContainer__eventsContainer__event__eventDescription__eventDateAndTime}>
                                    <p>{val.eventDate}</p>
                                    <p>{val.eventTime}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}