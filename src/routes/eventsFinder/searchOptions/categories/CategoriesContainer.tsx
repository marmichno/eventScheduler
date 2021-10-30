import CategoriesContainerCSS from './categoriesContainer.module.scss';
//icons
import { CategoriesIcons } from '../../../../components/categoriesIcons/CategoriesIcons';

export const CategoriesContainer = () => {
    return(
        <div className={CategoriesContainerCSS.mainContainer}>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
            <CategoriesIcons color="purple" size="2rem" iconType="gaming"/>
        </div>
    )
}