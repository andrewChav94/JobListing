import React from "react";
import iconRemove from '../../assets/icon-remove.svg';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTag } from '../../features/tagsSlice';
import 'antd/dist/antd.css';
import { Popover } from "antd";

const popHelp = (
    <div className="popover">
        <p>Remove Tag</p>
    </div>
);

const FilterTag = (props) => {
    const rTags = useSelector((state) => state.tags.value);
    const dispatch = useDispatch();

    const removeClick = () => {

        const index = rTags.indexOf(props.tag);
        dispatch(deleteTag(index));
    }

    return (
        <Popover content={popHelp}>
            <div className="filter-tag" onClick={removeClick}>
                <p className="filter-name">{props.tag}</p>
                <button className="filter-cancel"><img src={iconRemove} alt="close" ></img></button>
            </div>
        </Popover>
    );

}

export default FilterTag;