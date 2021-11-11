import UserProfileCSS from './userProfile.module.scss';
//components
import { Navbar } from '../../components/navbar/Navbar';

export const UserProfile = () => {
    return(
        <div className={UserProfileCSS.mainContainer}>
            <Navbar/>
            <div className={UserProfileCSS.mainContainer__contentContainer}>

            </div>
        </div>
    )
}