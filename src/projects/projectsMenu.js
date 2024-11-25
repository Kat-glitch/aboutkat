import classNames from 'classnames';
import React, { Component } from 'react'
import projects from "./projectsData";
import "../styles/projectmenu.css";

export default class projectsMenu extends Component {
constructor(props){
    super(props);
    this.state = {
        activeProject : 1,
    };
}

handleProjectClick = (project) =>{
    this.setState({
        activeProject: project,
    });
};

renderContent = (projects) => {
    return projects.map((project, index) => (
        <div key={index}
        className={`project-sub-container-${index + 1}`}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title}></img>
            <div className='link-container'>
                <a href={project.github} target="_blank" rel="nooper noreferrer">GITHUB</a>
                <a href={project.demo} target="_blank" rel="nooper noreferrer">DEMO</a>
            </div>
        </div>
    ));
};



  render() {
    const {activeProject} = this.state;
    const projectItems = [ "PROJECT ONE", "PROJECT TWO", "PROJECT THREE"];
    return (
      <div className='project-menu'>
        <div className='project-items-container'>
            {projectItems.map((item, index) => (
                <div
                key={index}
                className={classNames("project-item", {
                    activeProject: activeProject === index + 1,
                })}
                onClick={() => this.handleProjectClick(index + 1)}>
                    <h2 className='title'>{item}</h2>
                    
                    </div>

            ))}
        </div>
            <div className='project-sub-conatiner'>
                {this.renderContent([projects[activeProject]])}
            </div>
      </div>
    )
  }
}
