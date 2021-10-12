import EventsTypeCSS from './eventsType.module.scss';

export const EventsTypeContainer = () => {
    return(
        <div className={EventsTypeCSS.mainContainer}>
            <div className={EventsTypeCSS.mainContainer__active}>private</div>
            <div className={EventsTypeCSS.mainContainer__notActive}>public</div>
        </div>
    )
}