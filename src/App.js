import './styles.css'
import iconRemove from './assets/icon-remove.svg';

function App() {
  return (
    <>
      <div id="header"></div>

      <div id="container">

        <div id="tagBox">
          <div className="tags-field">
            <div className="filter-tag">
              <p className="filter-name">Frontend</p>
              <button className="filter-cancel"><img src={ iconRemove } alt="close"></img></button>
            </div>

            <div className="filter-tag">
              <p className="filter-name">Frontend</p>
              <button className="filter-cancel"><img src={ iconRemove } alt="close"></img></button>
            </div>

            <div className="filter-tag">
              <p className="filter-name">Full Stack devops</p>
              <button className="filter-cancel"><img src={ iconRemove } alt="close"></img></button>
            </div>
            <div className="filter-tag">
              <p className="filter-name">Java</p>
              <button className="filter-cancel"><img src={ iconRemove } alt="close"></img></button>
            </div>
          </div>
          <div>
            <button id="clear-filter">
              <p>Clear</p>
            </button>
          </div>
        </div>

        <div className="job-box">
          <div className="job-info">
            <img className="job-icon" src="./assets/photosnap.svg" alt="job icon"></img>

            <div className="job-details">
              <div className="job-company">
                <p className="c-name">Photosnap</p>
                <p className="c-new">NEW!</p>
                <p className="c-featured">FEATURED</p>
              </div>
              <p className="job-name">Senior Frontend Developer</p>
              <div className="job-foot">
                <p>1d ago</p>
                <span className="circle"></span>
                <p>Full Time</p>
                <span className="circle"></span>
                <p>USA only</p>
              </div>
            </div>
          </div>
          <div className="job-tag-field">
            <div>
              <p>Frontend</p>
            </div>

            <p>Senior</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>Javascript</p>
          </div>
        </div>



      </div>
    </>
  );
}

export default App;
