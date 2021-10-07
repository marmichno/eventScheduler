import EventMainPageCSS from './eventMainPage.module.scss';

export const EventMainPage = () => {
    return(
        <div className={EventMainPageCSS.mainContainer}>
            <div className={EventMainPageCSS.mainContainer__icon}></div>
            <div className={EventMainPageCSS.mainContainer__description}>
                <div><h2>Some kind of event title</h2></div>
                <div>Cracow</div>
                <div>14:00 10/7/2021</div>
            </div>
            <div className={EventMainPageCSS.mainContainer__additionalInfo}>
                <div className={EventMainPageCSS.mainContainer__additionalInfo__availability}>9999/100000</div>
                <div className={EventMainPageCSS.mainContainer__additionalInfo__category}>music</div>
            </div>
        </div>
    )
}