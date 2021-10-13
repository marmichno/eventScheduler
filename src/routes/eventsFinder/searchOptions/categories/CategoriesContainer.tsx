import CategoriesContainerCSS from './categoriesContainer.module.scss';
//icons
import { CategoriesIcons } from '../../../../components/categoriesIcons/CategoriesIcons';

export const CategoriesContainer = () => {
    return(
        <div className={CategoriesContainerCSS.mainContainer}>
            <CategoriesIcons color="white" size="2rem" iconType="automotive"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="green" size="2rem" iconType="programming"/>
            <CategoriesIcons color="red" size="2rem" iconType="music"/>
            <CategoriesIcons color="white" size="2rem" iconType="sport"/>
            <CategoriesIcons color="yellow" size="2rem" iconType="knowledge"/>
            <CategoriesIcons color="lightblue" size="2rem" iconType="technology"/>
            <CategoriesIcons color="orange" size="2rem" iconType="meet"/>
        </div>
    )
}