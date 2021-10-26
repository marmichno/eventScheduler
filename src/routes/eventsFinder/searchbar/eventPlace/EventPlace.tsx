import EventPlaceCSS from './eventPlace.module.scss';

export const EventPlace = () => {
    return(
        <div className={EventPlaceCSS.mainContainer}>
            <input type="text" className={EventPlaceCSS.mainContainer__input} placeholder="event location"></input>
        </div>
    )
}