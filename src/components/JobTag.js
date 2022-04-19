import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTag, deleteTag } from '../features/tagsSlice';

const JobTag = (props) => {
    const rTags = useSelector((state) => state.tags.value);
    const dispatch = useDispatch();

    const handleClick = () => {

        // let newTags = rTags.filter(tag => tag === props.tag ? false : true);
        const index=rTags.indexOf(props.tag);
        if (index > -1)
            dispatch(deleteTag(index));
        else
            dispatch(addTag(props.tag));
    };

    return (
        <span onClick={handleClick}> {props.tag}</span>
    );

}

export default JobTag;