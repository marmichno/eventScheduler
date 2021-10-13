import CategoriesIconsCSS from './categoriesIcons.module.scss';
//icons
import {AiTwotoneCar} from 'react-icons/ai';
import {MdVideogameAsset} from 'react-icons/md';
import {BsCodeSlash} from 'react-icons/bs';
import {FaMusic} from 'react-icons/fa';
import {MdOutlineSportsSoccer} from 'react-icons/md';
import {SiKnowledgebase} from 'react-icons/si';
import {MdOutlineComputer} from 'react-icons/md';
import {MdPeople} from 'react-icons/md';

interface Provider {
    color:string,
    size: string,
    iconType: string
}

export const CategoriesIcons = ({color, size, iconType}:Provider) => {

    const iconStyles = { fill: color, fontSize:size}

    const whichIcon = () => {
        switch(iconType){
            case "automotive":
                return <AiTwotoneCar style={iconStyles}></AiTwotoneCar>
            case "gaming":
                return <MdVideogameAsset style={iconStyles}></MdVideogameAsset>
            case "programming":
                return <BsCodeSlash style={iconStyles}></BsCodeSlash>
            case "music":
                return <FaMusic style={iconStyles}></FaMusic>
            case "sport":
                return <MdOutlineSportsSoccer style={iconStyles}></MdOutlineSportsSoccer>
            case "knowledge":
                return <SiKnowledgebase style={iconStyles}></SiKnowledgebase>
            case "technology":
                return <MdOutlineComputer style={iconStyles}></MdOutlineComputer>
            case "meet":
                return <MdPeople style={iconStyles}></MdPeople>
        }
    }

    return(
        <div className={CategoriesIconsCSS.mainContainer}>
            {whichIcon()}
            <p className={CategoriesIconsCSS.mainContainer__iconText} style={{color:color}}>{iconType}</p>
        </div>
    )
}