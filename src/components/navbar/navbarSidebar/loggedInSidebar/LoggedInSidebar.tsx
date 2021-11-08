import LoggedInSidebarCSS from './loggedInSidebar.module.scss';
//hooks
import { useAppDispatch } from '../../../../hooks';
//actions
import { isLogged } from '../../../../actions';

export const LoggedInSidebar = () => {

    const dispatch = useAppDispatch();

    const logout = () => {
        localStorage.removeItem('user');
        dispatch(isLogged(false));
    }

    return(
        <div className={LoggedInSidebarCSS.mainContainer}>
            <button onClick={logout}>logout</button>
        </div>
    )
}