import EventDetailsCSS from './eventDetails.module.scss';
//hooks
import { useAppSelector } from '../../../../../../hooks';

export const EventDetails = () => {

    const selectedUserEvent = useAppSelector(state => state.selectedUserEvent);

    return (
        <div className={EventDetailsCSS.mainContainer}>
            <div className={EventDetailsCSS.mainContainer__fieldContainer}>
                <h2>Event Name</h2>
                <p>{selectedUserEvent.name}</p>
            </div>
            <div className={EventDetailsCSS.mainContainer__fieldContainer}>
                <h2>Organizer</h2>
                <p>{selectedUserEvent.organizer.name}</p>
            </div>
            <div className={EventDetailsCSS.mainContainer__fieldContainer}>
                <h2>Availability type</h2>
                <p>{selectedUserEvent.eventAvailabilityType}</p>
            </div>
            <div className={EventDetailsCSS.mainContainer__fieldContainer}>
                <h2>Starts at</h2>
                <p>{`${(selectedUserEvent.dateFrom).split("T")[1]} ${(selectedUserEvent.dateFrom).split("T")[0]}`}</p>
            </div>
            <div className={EventDetailsCSS.mainContainer__fieldContainer}>
                <h2>Ends at</h2>
                <p>{`${(selectedUserEvent.dataTo).split("T")[1]} ${(selectedUserEvent.dataTo).split("T")[0]}`}</p>
            </div>
            <div className={EventDetailsCSS.mainContainer__fieldContainer__address}>
                <h2>Event Address</h2>
                <p>{selectedUserEvent.address.city}</p>
                <p>{`${selectedUserEvent.address.street} ${selectedUserEvent.address.houseNumber}`}</p>
                <p>{selectedUserEvent.address.state}</p>
            </div>
            <div className={EventDetailsCSS.mainContainer__fieldContainer}>
                <h2>Description</h2>
                <p>{selectedUserEvent.description}</p>
            </div>
        </div>
    )
}