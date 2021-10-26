import EventTitleCSS from './eventTitle.module.scss';

export const EventTitle = () => {
    return(
        <div className={EventTitleCSS.mainContainer}>
            <input className={EventTitleCSS.mainContainer__input} placeholder="event name" type="text"></input>
        </div>
    )
}