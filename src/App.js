import React, { useEffect } from "react";
// import "./styles.css";
import TagBox from "./components/Tags/TagBox";
import Job from "./components/Job/Job";
import data from "./assets/data.json";
import { useSelector, useDispatch } from "react-redux";
import { updateJobs } from "./features/jobsSlice";
import { Space, Card } from "antd";
import "antd/dist/antd.css";

function App() {
  const rTags = useSelector((state) => state.tags.value);
  const rJobs = useSelector((state) => state.jobs.jobs);
  const dispatch = useDispatch();

  const filterCheck = (job) => {
    if (!rTags.length) return true;
    else {
      let jobTags = job.languages.concat(job.tools);
      jobTags.push(job.role);
      jobTags.push(job.level);

      let encontrado = false;

      for (let jobtag of jobTags) {
        if (rTags.includes(jobtag)) {
          encontrado = true;
        }
      }

      if (encontrado) return true;
    }
  };

  useEffect(() => {
    const newJobs = data?.filter(filterCheck);
    dispatch(updateJobs(newJobs));
  }, [rTags, dispatch]);

  const Jobs = rJobs?.map((job) => <Job key={job.id} data={job} />);

  // return (
  //   <div id='app'>
  //     <div id="header"></div>

  //     <div id="container">

  //       <TagBox />

  //       {Jobs}

  //     </div>
  //   </div>
  // );

  return (
    <>
      <div id="header"></div>
      <Space direction="vertical" className="space" size="small">

        
      { rTags.length ? 
        <TagBox /> : <div className="no-tag-box"></div>
      }


        {Jobs}
      </Space>
    </>
  );
}

export default App;
