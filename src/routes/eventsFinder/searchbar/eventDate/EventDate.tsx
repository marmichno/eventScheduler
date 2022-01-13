import EventDateCSS from './eventDate.module.scss';

export const EventDate = () => {
    return(
        <div className={EventDateCSS.mainContainer}>
            <input type="date" className={EventDateCSS.mainContainer__input}></input>
        </div>
    )
}