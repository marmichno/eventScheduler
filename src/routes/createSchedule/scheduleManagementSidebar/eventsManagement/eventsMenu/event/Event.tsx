import EventCSS from './event.module.scss';
//hoks
import { useAppSelector } from "../../../../../../hooks"
import { useAppDispatch } from '../../../../../../hooks';
import { useEffect} from 'react';
//actions
import { showEventPopup } from '../../../../../../actions';
import { popupEventType } from '../../../../../../actions';
import { chooseEventId } from '../../../../../../actions';
//icons
import { BsTrash } from 'react-icons/bs';
import { BiCalendarEdit } from 'react-icons/bi';

export const Event = () => {

    const allUserEvents = useAppSelector(state => state.allUserEvents);
    const selectedType = useAppSelector(state => state.eventTypeReducer);
    const dispatch = useAppDispatch();

    const popupEventMgmt = (e: any) => {
        const eventId = e.target.dataset.id;
        const popupType = e.target.dataset.popuptype;

        if (popupType === "delete") {
            dispatch(popupEventType('removeEvent'));
        } else if (popupType === "modify") {
            dispatch(popupEventType('modifyEvent'));
        }
        dispatch(chooseEventId(eventId));
        dispatch(showEventPopup(true));
    }

    useEffect(() => {
        console.log(allUserEvents.data);  
    },[allUserEvents]);

    const eventRender = () => {
        if (allUserEvents['data'].length < 0) {
            if (selectedType === "private") {
                return (
                    allUserEvents['data'].map(val => {
                        if (val) {
                            return (
                                <div className={EventCSS.eventContainer}>
                                    <div className={EventCSS.eventContainer__description}>{val.name}</div>
                                    <div
                                        data-id={val.id}
                                        data-popuptype="delete"
                                        className={EventCSS.eventContainer__action}
                                        onClick={(e) => popupEventMgmt(e)}>
                                        <BsTrash />
                                    </div>
                                    <div
                                        data-id={val.id}
                                        data-popuptype="modify"
                                        className={EventCSS.eventContainer__action}
                                        onClick={(e) => popupEventMgmt(e)}><BiCalendarEdit />
                                    </div>
                                </div>
                            )
                        } else {
                            return
                        }
                    })
                )
            } else if (selectedType === "public") {
                return (
                    allUserEvents['data'].map(val => {
                        if (val) {
                            return (
                                <div className={EventCSS.eventContainer}>
                                    <div className={EventCSS.eventContainer__description}>{val.name}</div>
                                    <div className={EventCSS.eventContainer__action}>
                                        <div
                                            data-id={val.id}
                                            data-popuptype="delete"
                                            onClick={(e) => popupEventMgmt(e)}
                                            className={EventCSS.eventContainer__action__clicker}>
                                        </div>
                                        <BsTrash />
                                    </div>
                                    <div
                                        className={EventCSS.eventContainer__action}>
                                        <div
                                            data-id={val.id}
                                            data-popuptype="modify"
                                            onClick={(e) => popupEventMgmt(e)}
                                            className={EventCSS.eventContainer__action__clicker}>
                                        </div>
                                        <BiCalendarEdit />
                                    </div>
                                </div>
                            )
                        }
                    })
                )
            }
        } else {
            return <></>
        }
    }

    return (
        <>
            {/* {eventRender()} */}
        </>
    )
}