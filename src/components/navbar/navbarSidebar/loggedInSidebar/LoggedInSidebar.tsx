import LoggedInSidebarCSS from './loggedInSidebar.module.scss';
//hooks
import { useAppDispatch } from '../../../../hooks';
import { useEffect, useState } from 'react';
//actions
import { isLogged } from '../../../../actions';

interface UserInfo {
    id: number,
    name: string,
    description: string,
    email: string,
    inviteToFriend: string,
    friendsList: Array<{
        id: number,
        name:string
    }>
}

export const LoggedInSidebar = () => {

    const dispatch = useAppDispatch();

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

    useEffect(() => {
        const userInfo = localStorage.getItem('userInfo');

        if (userInfo !== null) {
            setUserInfo(JSON.parse(userInfo));
        }
    }, []);
    
    const logout = () => {
        localStorage.removeItem('user');
        dispatch(isLogged(false));
    }

    return(
        <div className={LoggedInSidebarCSS.mainContainer}>
            <div className={LoggedInSidebarCSS.mainContainer__loggedUserContainer}>
                <div className={LoggedInSidebarCSS.mainContainer__loggedUserContainer__avatar}>
                    <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"></img>
                </div>
                <div className={LoggedInSidebarCSS.mainContainer__loggedUserContainer__description}>
                    <h2>{userInfo !== null ? userInfo.name : null}</h2>
                </div>
            </div>
            <div className={LoggedInSidebarCSS.mainContainer__routeContainer}>
                <a href="/">Home</a>
            </div>
            <div className={LoggedInSidebarCSS.mainContainer__routeContainer}>
                <a href="/userProfile">Profile</a>
            </div>
            <div className={LoggedInSidebarCSS.mainContainer__routeContainer}>
                <a href="/manageSchedule">Schedule</a>
            </div>
            <div className={LoggedInSidebarCSS.mainContainer__buttonsContainer}>
                <button onClick={logout}>logout</button>
            </div>
        </div>
    )
}