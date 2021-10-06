import SearchOptionsCSS from './searchOptions.module.scss';
//components
import { CategoriesContainer } from './categories/CategoriesContainer';
import { EventsTypeContainer } from './eventsType/EventsTypeContainer';

export const SearchOptionsContainer = () => {
    return(
        <div className={SearchOptionsCSS.mainContainer}>
            <CategoriesContainer/>
            <EventsTypeContainer/>
        </div>
    )
}