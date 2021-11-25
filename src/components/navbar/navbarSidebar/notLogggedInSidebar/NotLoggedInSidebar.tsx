import NotLoggedInSidebarCSS from './notLoggedInSidebar.module.scss';
//hooks
import { useHistory } from 'react-router';
//icons
import { GrFacebook } from 'react-icons/gr'

export const NotLoggedInSidebar = () => {

    const history = useHistory();

    const goToPage = (direction: string) => {
        const location = {
            pathname: `/${direction}`,
        }
        history.push(location);
    }

    return (
        <div className={NotLoggedInSidebarCSS.mainContainer}>
            <div className={NotLoggedInSidebarCSS.mainContainer__topFillerContainer}>
                <div className={NotLoggedInSidebarCSS.mainContainer__topFillerContainer__imgContainer}>
                    <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                </div>
                <div className={NotLoggedInSidebarCSS.mainContainer__topFillerContainer__descriptionContainer}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sed quis a, labore itaque dolore.</p>
                </div>
            </div>
            <div className={NotLoggedInSidebarCSS.mainContainer__routeContainer}>
                <a href="/">Home</a>
            </div>
            <div className={NotLoggedInSidebarCSS.mainContainer__routeContainer}>
                <a href="/login">Login</a>
            </div>
            <div className={NotLoggedInSidebarCSS.mainContainer__routeContainer}>
                <a href="/register">Register</a>
            </div>
        </div>
    )
}