import EventCSS from './event.module.scss';
//hoks
import { useAppSelector } from "../../../../../../hooks"
import { useAppDispatch } from '../../../../../../hooks';
//actions
import { showEventPopup } from '../../../../../../actions';
import { popupEventType } from '../../../../../../actions';
import { chooseEventId } from '../../../../../../actions';
import { selectUserEvent } from '../../../../../../actions';
//functions
import findSelectedEvent from '../../../../schedule/common/findSelectedEvent';
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

    const showEventDetails = (e:any) => {
        dispatch(showEventPopup(true));
        dispatch(selectUserEvent(findSelectedEvent(allUserEvents, e)));
        dispatch(popupEventType("eventDetails"));
    }

    const eventRender = () => {
        if (allUserEvents.fetchStatus === "FETCH_SUCCESS") {
            if (selectedType === "private") {
                return (
                    allUserEvents['data'].map(val => {
                        if (val.eventStatus === "ACTIVE") {
                            return (
                                <div className={EventCSS.eventContainer}>
                                    <div className={EventCSS.eventContainer__description} data-id={val.id} onClick={e => showEventDetails(e)}>{val.name}</div>
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
                        if (val.eventStatus === "ACTIVE") {
                            return (
                                <div className={EventCSS.eventContainer}>
                                    <div className={EventCSS.eventContainer__description} data-id={val.id} onClick={e => showEventDetails(e)}>{val.name}</div>
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
                        } else{
                            return
                        }
                    })
                )
            }
        } else if (allUserEvents.fetchStatus === "BEFORE_FETCH") {
            return <></>
        } else if (allUserEvents.fetchStatus === "FETCH_ERROR") {
            return <h2>Something went wrong :c</h2>
        }
    }

    return (
        <>
            {eventRender()}
        </>
    )
}