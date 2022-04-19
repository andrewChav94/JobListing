import React from "react";

const JobTag = (props) => {

    const handleClick = () => {     

        let newTags = props.Tags.filter(tag => tag === props.tag ? false : true);

        if (props.Tags.length === newTags.length)
            newTags.push(props.tag);
            
        props.setTags(newTags);
       
    };

    return (
        <span onClick={handleClick}> {props.tag}</span>
    );

}

export default JobTag;