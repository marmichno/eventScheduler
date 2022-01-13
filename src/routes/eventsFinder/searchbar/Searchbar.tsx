import SearchbarCSS from './searchbar.module.scss';
//components
import { EventTitle } from './eventTitle/EventTitle';
import { EventPlace } from './eventPlace/EventPlace';
import { EventDate } from './eventDate/EventDate';

export const Searchbar = () => {
    return(
        <div className={SearchbarCSS.mainContainer}>
            <EventTitle/>
            <EventPlace/>
            <EventDate/>
        </div>
    )
}