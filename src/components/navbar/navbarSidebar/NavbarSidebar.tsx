import NavbarSidebarCSS from './navbarSidebar.module.scss';
//actions
import { showNavbar } from '../../../actions';
//hooks
import { useAppDispatch } from '../../../hooks';
import { useAppSelector } from '../../../hooks';
//components
import { LoggedInSidebar } from './loggedInSidebar/LoggedInSidebar';
import { NotLoggedInSidebar } from './notLogggedInSidebar/NotLoggedInSidebar';

export const NavbarSidebar = () => {

    const dispatch = useAppDispatch();
    const navbarState = useAppSelector(state => state.showNavbarReducer);
    const isLogged = useAppSelector(state => state.isLoggedReducer);

    const renderSidebarContent = () => {
        if(isLogged){
            return <LoggedInSidebar/>
        }else{
            return <NotLoggedInSidebar/>
        }
    }

    return(
        <div className={NavbarSidebarCSS.mainContainer}>
            <div className={NavbarSidebarCSS.mainContainer__close}>
                <button onClick={() => dispatch(showNavbar(!navbarState))}>x</button>
            </div>
            {renderSidebarContent()}
        </div>
    )
}