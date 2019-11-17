import React, { useEffect } from 'react';
import ProjectItem from './ProjectItem';

const Projects = ({ projects }) => {
  return (
    <div className='flex-col relative clearfix' style={{ zIndex: '0' }}>
      {projects.map(project => (
        <ProjectItem
          projectNumber={project.ProjectID}
          projectColor={project.projectColor}
        />
      ))}
    </div>
  );
};

export default Projects;
