import EventMainPageCSS from './eventMainPage.module.scss';
//icons
import { CategoriesIcons } from '../../../../../components/categoriesIcons/CategoriesIcons';
import {MdDateRange} from 'react-icons/md';
import {MdPlace} from 'react-icons/md';

export const EventMainPage = () => {
    return(
        <div className={EventMainPageCSS.mainContainer}>
            <div className={EventMainPageCSS.mainContainer__icon}></div>
            <div className={EventMainPageCSS.mainContainer__description}>
                <div><h2>Some kind of event title</h2></div>
                <div className={EventMainPageCSS.mainContainer__description__city}>
                    <div className={EventMainPageCSS.mainContainer__description__city__text}><p>Cracow</p></div>
                    <div className={EventMainPageCSS.mainContainer__description__city__icon}><MdPlace/></div>
                </div>
                <div className={EventMainPageCSS.mainContainer__description__time}>
                    <div className={EventMainPageCSS.mainContainer__description__time__text}><p>14:00 10/7/2021</p></div>
                    <div className={EventMainPageCSS.mainContainer__description__time__icon}><MdDateRange/></div>
                </div>
            </div>
            <div className={EventMainPageCSS.mainContainer__additionalInfo}>
                <div className={EventMainPageCSS.mainContainer__additionalInfo__availability}>236/1000</div>
                <div className={EventMainPageCSS.mainContainer__additionalInfo__category}><CategoriesIcons color="red" size="1.5rem" iconType="music"/></div>
            </div>
        </div>
    )
}