import UserProfileCSS from './userProfile.module.scss';
//components
import { Navbar } from '../../components/navbar/Navbar';
import { UserDetails } from './userDetails/UserDetails';
import { UserNortifications } from './userNortifications/UserNortifications';
import { FriendsAndGroups } from './friendsAndGroups/friendsAndGroups';
import { UpcomingEvents } from './upcomingEvents/UpcomingEvents';

export const UserProfile = () => {
    return (
        <div className={UserProfileCSS.mainContainer}>
            <Navbar />
                <div className={UserProfileCSS.mainContainer__profileSidebar}>
                    <UserDetails />
                </div>
                <div className={UserProfileCSS.mainContainer__scrollableContainer}>
                    <UserNortifications />
                    <UpcomingEvents />
                    <FriendsAndGroups />
                </div>
        </div>
    )
}