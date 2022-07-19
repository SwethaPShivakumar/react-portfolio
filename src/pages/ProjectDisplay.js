import React from 'react';
import { useParams } from 'react-router-dom';
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from "@material-ui/icons/GitHub";
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id]
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt="" />
      <p>Skills: {project.skills}</p>
      <GitHubIcon
        onClick={() =>
          window.open(
            `https://github.com/SwethaPShivakumar/${project.gitExtension}`,
            "_blank"
          )
        }
      />
    </div>
  );
}

export default ProjectDisplay
