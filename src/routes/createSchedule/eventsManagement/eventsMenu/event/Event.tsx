import EventCSS from './event.module.scss';
//hoks
import { useAppSelector } from "../../../../../hooks"
import { useAppDispatch } from '../../../../../hooks';
//actions
import { showEventPopup } from '../../../../../actions';
import { popupEventType } from '../../../../../actions';
//icons
import {BsTrash} from 'react-icons/bs';
import {BiCalendarEdit} from 'react-icons/bi';

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
                    <div className={EventCSS.eventContainer__description}>Some sort of event name</div>
                    <div className={EventCSS.eventContainer__action} onClick={() => removeEvent()}><BsTrash/></div>
                    <div className={EventCSS.eventContainer__action} onClick={() => modifyEvent()}><BiCalendarEdit/></div>
                </div>
            )
        }else if(selectedType === "public"){
            return(
                <div className={EventCSS.eventContainer}>
                    <div className={EventCSS.eventContainer__description}>Public</div>
                    <div className={EventCSS.eventContainer__action} onClick={() => removeEvent()}><BsTrash/></div>
                    <div className={EventCSS.eventContainer__action} onClick={() => modifyEvent()}><BiCalendarEdit/></div>
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