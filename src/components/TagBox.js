import React from 'react';
import FilterTag from './FilterTag';

const TagBox = (props) => {

    const Tags=props.Tags.map(tag => <FilterTag key={tag} tag={tag} Tags={props.Tags} setTags={props.setTags} />);

    const clearFilter = () => {
        props.setTags([]);
    }

    return (
        <div id="tagBox">
            <div className="tags-field">
                { Tags }
            </div>
            <div>
                <button id="clear-filter" onClick={ clearFilter }>
                    <p>Clear</p>
                </button>
            </div>
        </div>
    );
}

export default TagBox;