import NavbarCSS from './navbar.module.scss';
//actions
import { showNavbar } from '../../actions';
//hooks
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks';
//components
import { NavbarSidebar } from './navbarSidebar/NavbarSidebar';

export const Navbar = () => {

    const dispatch = useAppDispatch();
    const navbarState = useAppSelector(state => state.showNavbarReducer);
    const isUserLogged = useAppSelector(state => state.isLoggedReducer);

    return(
        <>
            <div className={NavbarCSS.mainContainer}>
                <div className={NavbarCSS.mainContainer__appName}><h2>Event scheduler</h2></div>
                <div className={NavbarCSS.mainContainer__hamburger} onClick={() => dispatch(showNavbar(!navbarState))}>=</div>
            </div>
            {navbarState ? <NavbarSidebar/> : null}
        </>
    )
}