import React from 'react';
import FilterTag from './FilterTag';
import { useSelector, useDispatch } from 'react-redux';
import { clearTags } from '../../features/tagsSlice';
import './styles.css';
import 'antd/dist/antd.css';
import { Popover } from "antd";

const popHelp = (
    <div className="popover">
        <p>Clear filters</p>
    </div>
);


const TagBox = (props) => {
    const rTags = useSelector((state) => state.tags.value);
    const dispatch = useDispatch();

    const Tags = rTags.map(tag => <FilterTag key={tag} tag={tag} />);

    const clearFilter = () => {
        dispatch(clearTags());
    }

    return (
        <div id="tagBox">
            <div className="tags-field">
                {Tags}
            </div>
            <div>
                <Popover content={popHelp}>
                    <button id="clear-filter" onClick={clearFilter}>
                        <p>Clear</p>
                    </button>
                </Popover>
            </div>
        </div>
    );
}

export default TagBox;