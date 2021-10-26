import EventDateCSS from './eventDate.module.scss';

export const EventDate = () => {
    return(
        <div className={EventDateCSS.mainContainer}>
            <input type="text" className={EventDateCSS.mainContainer__input} placeholder="dd-mm-yyyy"></input>
        </div>
    )
}