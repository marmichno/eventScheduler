import UserProfileCSS from './userProfile.module.scss';
//components
import { Navbar } from '../../components/navbar/Navbar';
import { UserDetails } from './userDetails/UserDetails';
import { UserNortifications } from './userNortifications/UserNortifications';

export const UserProfile = () => {
    return (
        <div className={UserProfileCSS.mainContainer}>
            <Navbar />
            <div className={UserProfileCSS.mainContainer__contentContainer}>
                <UserDetails />
                <div className={UserProfileCSS.mainContainer__contentContainer__nortifications}>
                    <UserNortifications />
                </div>
            </div>
        </div>
    )
}