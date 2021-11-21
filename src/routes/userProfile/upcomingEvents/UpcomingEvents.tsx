import UpcomingEventsCSS from './upcomingEvents.module.scss';

export const UpcomingEvents = () => {
    return (
        <div className={UpcomingEventsCSS.mainContainer}>
            <div className={UpcomingEventsCSS.mainContainer__contentDescription}>
                <h2>Upcoming events</h2>
            </div>
        </div>
    )
}