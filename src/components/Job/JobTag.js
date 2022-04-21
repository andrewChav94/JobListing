import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTag, deleteTag } from '../../features/tagsSlice';
import 'antd/dist/antd.css';
import { Popover } from "antd";

const popHelp = (
    <div className="popover">
      <p>Add/Remove Tag</p>
    </div>
  );

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
        <Popover content={ popHelp }>
        <span onClick={handleClick}> {props.tag}</span>
        </Popover>
    );

}

export default JobTag;