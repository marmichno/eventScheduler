import NotLoggedInSidebarCSS from './notLoggedInSidebar.module.scss';
//hooks
import { useHistory } from 'react-router';
//icons
import {GrFacebook} from 'react-icons/gr'

export const NotLoggedInSidebar = () => {

    const history = useHistory();

    const goToPage = (direction:string) => {
        const location = {
            pathname: `/${direction}`,
        }
        history.push(location);
    }

    return(
        <div className={NotLoggedInSidebarCSS.mainContainer}>
            <div className={NotLoggedInSidebarCSS.mainContainer__routesContainer}>
                <div className={NotLoggedInSidebarCSS.mainContainer__routesContainer__route}><h2><a href="/login">Login</a></h2></div>
                <div className={NotLoggedInSidebarCSS.mainContainer__routesContainer__route}><h2><a href="/register">Register</a></h2></div>
                <div className={NotLoggedInSidebarCSS.mainContainer__routesContainer__route}><h2><a href="/register">Join with facebook</a></h2></div>
            </div>
        </div>
    )
}