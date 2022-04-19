import React from "react";
import JobTag from "./JobTag";

const Job = (props) => {

    var image = props.data.logo.split('/').pop();

    return (
        <div className="job-box">
            <div className="job-info">
                <img className="job-icon" src={`../assets/${image}`} alt="job icon"></img>

                <div className="job-details">
                    <div className="job-company">
                        <p className="c-name">{props.data.company}</p>
                        {props.data.new ? <p className="c-new">NEW!</p> : <p />}
                        {props.data.featured ? <p className="c-featured">FEATURED</p> : <p />}

                    </div>
                    <p className="job-name">{props.data.position}</p>
                    <div className="job-foot">
                        <p>{props.data.postedAt}</p>
                        <span className="circle"></span>
                        <p>{props.data.contract}</p>
                        <span className="circle"></span>
                        <p>{props.data.location}</p>
                    </div>
                </div>
            </div>
            <div className="job-tag-field">

                <JobTag
                    tag={props.data.role}
                />

                <JobTag
                    tag={props.data.level}
                   
                />

                {props.data.languages.map((tag, i) => 
                    
                        <JobTag key={i}
                            tag={tag}
                           
                        />
                )}

                {props.data.tools.map((tag, i) => 
                    
                        <JobTag key={i}
                            tag={tag}
                           
                        />
                )}
            </div>
        </div>
    );
}

export default Job;
