import SelectedEventMainPageCSS from './selectedEventMainPage.module.scss';
//actions
import { selectedEventEventFinder } from '../../../../../actions';
//hooks
import { useAppDispatch } from '../../../../../hooks';
//icons
import {AiOutlineArrowLeft} from 'react-icons/ai';

export const SelectedEventMainPage = () =>{

    const dispatch = useAppDispatch();

    return(
        <div className={SelectedEventMainPageCSS.mainContainer}>
            <div className={SelectedEventMainPageCSS.mainContainer__goBack} onClick={() => dispatch(selectedEventEventFinder(0))}><AiOutlineArrowLeft/></div>
            <div className={SelectedEventMainPageCSS.mainContainer__imagesContainer}>
                <div className={SelectedEventMainPageCSS.mainContainer__imagesContainer__avatar}/>
                <div className={SelectedEventMainPageCSS.mainContainer__imagesContainer__background}/>
            </div>
            <div className={SelectedEventMainPageCSS.mainContainer__actionsContainer}>
                <button>join event</button>
                <button>invite a friend</button>
                <button>share</button>
            </div>
            <div className={SelectedEventMainPageCSS.mainContainer__descriptionContainer}>
                <h1 className={SelectedEventMainPageCSS.mainContainer__descriptionContainer__eventTitle}>Some kind of event title</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio recusandae pariatur animi blanditiis possimus, excepturi dolorum provident atque rem incidunt corrupti? Quo accusantium quaerat tenetur sit nemo explicabo fugit.</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio recusandae pariatur animi blanditiis possimus, excepturi dolorum provident atque rem incidunt corrupti? Quo accusantium quaerat tenetur sit nemo explicabo fugit.</p>
                <br></br>
                <h2>some sort of title</h2>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio recusandae pariatur animi blanditiis possimus, excepturi dolorum provident atque rem incidunt corrupti? Quo accusantium quaerat tenetur sit nemo explicabo fugit.</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio recusandae pariatur animi blanditiis possimus, excepturi dolorum provident atque rem incidunt corrupti? Quo accusantium quaerat tenetur sit nemo explicabo fugit.</p>
                <br></br>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae optio recusandae pariatur animi blanditiis possimus, excepturi dolorum provident atque rem incidunt corrupti? Quo accusantium quaerat tenetur sit nemo explicabo fugit.</p>
                <br></br>
            </div>
        </div>
    )
}