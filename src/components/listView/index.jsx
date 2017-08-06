import React from 'react';

function ListView(props) {
    let active_project = props.active_project;

    const projects = (
        <div>
            <div className="addProject clearfix">
                <span>Projects</span>
                <button className="iconButton" onClick={props.onClick}>+</button>
            </div>
            {props.projects.map((project,i) =>
                <div className={ active_project === project.id ? "project-line clearfix active" : "project-line clearfix" } key={i} onClick={ () => props.selectProject(project.id)  }>
                    <div className="project-content">{project.title}</div>
                </div>
            )}
        </div>
    );

    return (
        <div className="projects">{projects}</div>
    );
}

export default ListView;