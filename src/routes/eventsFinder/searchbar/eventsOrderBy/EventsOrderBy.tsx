import EventsOrderByCSS from './eventsOrderBy.module.scss';

export const EventsOrderBy = () => {
    return(
        <div className={EventsOrderByCSS.mainContainer}>
            <select className={EventsOrderByCSS.mainContainer__select}>
            <option className={EventsOrderByCSS.mainContainer__select__option}>order by</option>
                <option className={EventsOrderByCSS.mainContainer__select__option}>newest</option>
                <option className={EventsOrderByCSS.mainContainer__select__option}>close to me</option>
                <option className={EventsOrderByCSS.mainContainer__select__option}>swag</option>
            </select>
        </div>
    )
}