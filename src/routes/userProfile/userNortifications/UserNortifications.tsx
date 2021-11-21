import UserNortificationsCSS from './userNortifications.module.scss';
//components
import { FriendRequests } from './friendRequest/FriendRequests';

export const UserNortifications = () => {

    return(
        <div className={UserNortificationsCSS.mainContainer}>
            <div className={UserNortificationsCSS.mainContainer__contentDescription}>
                <h2>nortifications</h2>
            </div>
            <FriendRequests/>
        </div>
    )
}