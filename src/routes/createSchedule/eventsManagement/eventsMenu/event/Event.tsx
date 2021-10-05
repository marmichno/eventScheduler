import EventCSS from './event.module.scss';
//hoks
import { useAppSelector } from "../../../../../hooks"
import { useAppDispatch } from '../../../../../hooks';
//actions
import { showEventPopup } from '../../../../../actions';
import { popupEventType } from '../../../../../actions';

export const Event = () => {

    const selectedType = useAppSelector(state => state.eventTypeReducer);
    const dispatch = useAppDispatch();

    const removeEvent = () => {
        dispatch(popupEventType('removeEvent'))
        dispatch(showEventPopup(true));
    }

    const modifyEvent = () => {
        dispatch(popupEventType('modifyEvent'))
        dispatch(showEventPopup(true));
    }

    const eventRender = () => {
        if(selectedType === "private"){
            return(
                <div className={EventCSS.eventContainer}>
                    <div className={EventCSS.eventContainer__description}>Private</div>
                    <div className={EventCSS.eventContainer__action} onClick={() => removeEvent()}>R</div>
                    <div className={EventCSS.eventContainer__action} onClick={() => modifyEvent()}>M</div>
                </div>
            )
        }else if(selectedType === "public"){
            return(
                <div className={EventCSS.eventContainer}>
                    <div className={EventCSS.eventContainer__description}>Public</div>
                    <div className={EventCSS.eventContainer__action} onClick={() => removeEvent()}>R</div>
                    <div className={EventCSS.eventContainer__action} onClick={() => modifyEvent()}>M</div>
                </div>
            )
        }
    }

    return(
        <>
            {eventRender()}
        </>
    )
}