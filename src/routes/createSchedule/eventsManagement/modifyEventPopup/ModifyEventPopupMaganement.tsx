import EventManagementCSS from './modifyEventPopupManagement.module.scss';
//components
import { AddNewEvent } from './addNewEvent/AddNewEvent';
//hooks
import { useAppSelector } from '../../../../hooks';
import { useAppDispatch } from '../../../../hooks';
//actions
import { showEventPopup } from '../../../../actions';

export const ModifyEventPopupMaganement = () => {

    const dispatch = useAppDispatch();

    const selectedType = useAppSelector(state => state.popupEventTypeReducer);

    const popupRender = () => {
        switch(selectedType){
            case 'addNewEvent':
                return <AddNewEvent/>
        }
    }

    return (
        <div className={EventManagementCSS.popupContainer}>
            <div className={EventManagementCSS.popupContainer__close}>
                <button onClick={() => dispatch(showEventPopup(false))}>x</button>
            </div>
            {popupRender()}
        </div>
    )
}