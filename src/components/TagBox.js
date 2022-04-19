import React from 'react';
import FilterTag from './FilterTag';
import { useSelector, useDispatch } from 'react-redux';
import { clearTags } from '../features/tagsSlice';


const TagBox = (props) => {
    const rTags = useSelector((state) => state.tags.value);
    const dispatch = useDispatch();

    const Tags=rTags.map(tag => <FilterTag key={tag} tag={tag}/>);

    const clearFilter = () => {
        dispatch(clearTags());
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