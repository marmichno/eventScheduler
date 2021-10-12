import NotLoggedInSidebarCSS from './notLoggedInSidebar.module.scss';
//hooks
import { useHistory } from 'react-router';

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
            <div className={NotLoggedInSidebarCSS.mainContainer__route}><button onClick={() => goToPage("login")}>log in</button></div>
            <div className={NotLoggedInSidebarCSS.mainContainer__route}><button onClick={() => goToPage("register")}>create account</button></div>
        </div>
    )
}