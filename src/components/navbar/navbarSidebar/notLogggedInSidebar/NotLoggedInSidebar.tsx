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
            <div className={NotLoggedInSidebarCSS.mainContainer__logo}></div>
            <div className={NotLoggedInSidebarCSS.mainContainer__descriptionContainer}>
                <h2>join us and be able to:</h2>
                <ul>
                    <li>- create events</li>
                    <li>- invite friends</li>
                    <li>- plan your time</li>
                </ul>
            </div>
            <div className={NotLoggedInSidebarCSS.mainContainer__routesContainer}>
                <div className={NotLoggedInSidebarCSS.mainContainer__routesContainer__route}><button onClick={() => goToPage("login")}>log in</button></div>
                <div className={NotLoggedInSidebarCSS.mainContainer__routesContainer__route}><button onClick={() => goToPage("register")}>create account</button></div>
                <div className={NotLoggedInSidebarCSS.mainContainer__routesContainer__route}><button onClick={() => goToPage("register")}>join with facebook account</button></div>
            </div>
        </div>
    )
}