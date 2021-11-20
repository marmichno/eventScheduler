import UserNortificationsCSS from './userNortifications.module.scss';
//components
import { FriendRequests } from './friendRequest/FriendRequests';

export const UserNortifications = () => {

    return(
        <div className={UserNortificationsCSS.mainContainer}>
            <FriendRequests/>
        </div>
    )
}