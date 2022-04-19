import React from "react";
import iconRemove from '../assets/icon-remove.svg';

const FilterTag = (props) => {

    const removeClick= () => {
        
        let newTags = props.Tags.filter(tag => tag === props.tag ? false : true);
            
        props.setTags(newTags);
    }

    return(
        <div className="filter-tag" onClick={ removeClick }>
                    <p className="filter-name">{ props.tag }</p>
                    <button className="filter-cancel"><img src={iconRemove} alt="close" ></img></button>
                </div>
    );

}

export default FilterTag;