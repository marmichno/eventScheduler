import EventsTypeCSS from './eventsType.module.scss'
//hooks
import { useAppDispatch } from '../../../../../hooks';
import { useAppSelector } from '../../../../../hooks';
//actions
import { eventType } from '../../../../../actions';

export const EventType = () => {

    const dispatch = useAppDispatch();
    const selectedType = useAppSelector(state => state.eventTypeReducer);

    const renderEventTypeButtons = () => {
        if(selectedType === "private"){
            return(
                <>
                    <div className={`${EventsTypeCSS['eventTypesContainer__eventType--active']}`} onClick={() => dispatch(eventType("private"))}>private</div>
                    <div className={`${EventsTypeCSS['eventTypesContainer__eventType']}`} onClick={() => dispatch(eventType("public"))}>public</div>
                </>
            )
        }else if(selectedType === "public"){
            return(
                <>
                    <div className={`${EventsTypeCSS['eventTypesContainer__eventType']}`} onClick={() => dispatch(eventType("private"))}>private</div>
                    <div className={`${EventsTypeCSS['eventTypesContainer__eventType--active']}`} onClick={() => dispatch(eventType("public"))}>public</div>
                </>
            )
        }
    }

    return(
        <div className={EventsTypeCSS.eventTypesContainer}>
        {renderEventTypeButtons()}
        </div>
    )
}