import './styles.css'
import TagBox from './components/TagBox';
import Job from './components/Job';
import data from './assets/data.json';
import { useState } from 'react';


function App() {

  const [Tags, setTags] = useState([]);

  const filterCheck = (
    (job) => {
      if (!Tags.length) return true
      else {
        let jobTags = job.languages.concat(job.tools);
        jobTags.push(job.role);
        jobTags.push(job.level);
        let encontrado=false;
        jobTags.map(jobtag => {
          if (Tags.find(tag => tag === jobtag)){
          // console.log('encontrado')
            encontrado =true;
          }
        })
        if (encontrado) return true
      }
    }
  );

  const Jobs = data?.filter(filterCheck)
    .map(job =>
      <Job key={job.id} data={job} Tags={Tags} setTags={setTags} />
    )


  return (
    <div id='app'>
      <div id="header"></div>

      <div id="container">

        <TagBox Tags={Tags} setTags={setTags} />

        {Jobs}


      </div>
    </div>
  );
}


export default App;
