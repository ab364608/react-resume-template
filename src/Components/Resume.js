import React, { Component } from 'react';

class Resume extends Component {
  render() {

    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p>{education.description}</p></div>
      })
      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })
      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })
    }

    if (this.props.data) {
      var projects = this.props.projectData.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} target="_blank" title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="resume">
        <div id="skills" className="row skill">

          <div className="three columns header-col">
            <h1><span>Technical Skills</span></h1>
          </div>

          <div id="skills-container" className="nine columns main-col">
          <div className="row item">
            <p>{skillmessage}
            </p>
            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>

        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Projects</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>
        <section id="portfolio">

          <div className="row">

            <div id="project-container" className="twelve columns collapsed">

              <h1>GitHub Repository Links</h1>

              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf" target="_blank">
                {projects}
              </div>
            </div>
          </div>
        </section>
        {/* <div id="skills" className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div id="skills-container" className="nine columns main-col">

            <p>{skillmessage}
            </p>
				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div> */}
      </section>
    );
  }
}

export default Resume;
