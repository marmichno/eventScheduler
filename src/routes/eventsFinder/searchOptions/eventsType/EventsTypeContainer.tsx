import EventsTypeCSS from './eventsType.module.scss';
//hooks
import { useAppSelector } from '../../../../hooks';
import { useAppDispatch } from '../../../../hooks';
//actions
import { eventsTypeEventFinder } from '../../../../actions';

export const EventsTypeContainer = () => {

    const isLogged = useAppSelector(state => state.isLoggedReducer);
    const eventType = useAppSelector(state => state.selectEventTypeEventFinderReducer);
    const dispatch = useAppDispatch();

    const renderButtons = () => {
        if(isLogged){
            if(eventType === "PUBLIC"){
                return(
                    <div className={EventsTypeCSS.mainContainer}>
                        <button 
                        className={EventsTypeCSS.mainContainer__eventTypeBtn} 
                        onClick={() => dispatch(eventsTypeEventFinder("PRIVATE"))}>private</button>
                        <button 
                        className={`${EventsTypeCSS.mainContainer__eventTypeBtn} ${EventsTypeCSS['mainContainer__eventTypeBtn--active']}`} 
                        onClick={() => dispatch(eventsTypeEventFinder("PUBLIC"))}>public</button>
                    </div>
                )
            }else if(eventType === "PRIVATE"){
                return(
                    <div className={EventsTypeCSS.mainContainer}>
                        <button 
                        className={`${EventsTypeCSS.mainContainer__eventTypeBtn} ${EventsTypeCSS['mainContainer__eventTypeBtn--active']}`} 
                        onClick={() => dispatch(eventsTypeEventFinder("PRIVATE"))}>private</button>
                        <button 
                        className={EventsTypeCSS.mainContainer__eventTypeBtn} 
                        onClick={() => dispatch(eventsTypeEventFinder("PUBLIC"))}>public</button>
                    </div>
                )
            } else {
                return <></>
            }
        }else{
            return <></>
        }
    }

    return(
        <>
            {renderButtons()}
        </>
    )
}