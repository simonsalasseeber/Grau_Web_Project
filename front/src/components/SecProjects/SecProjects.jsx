import React, { useEffect, useState } from 'react'
import SecProjectsCard from '../SecProjectsCard/SecProjectsCard';
import axios from 'axios';

const SecProjects = () => {
    const URL_SEC_PROJECTS = import.meta.env.VITE_BACK_URL_SEC;
    const [secProjects, setsecProjects] = useState([]);

  useEffect(() => {
    if (!URL_SEC_PROJECTS) {
        console.error('URL_SEC_PROJECTS is not defined');
        return;
     }

    axios.get(URL_SEC_PROJECTS)
        .then(response => {
            // Extract the main project from the array
            const secProjectData = response.data;
            console.log(secProjectData)
            setsecProjects(secProjectData);
        })
        .catch(error => {
            console.log('Error fetching main project:', error);
        });
}, []);

return (
  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {secProjects && secProjects.map(secProject => (
          <SecProjectsCard
              key={secProject._id}
              title={secProject.title}
              producer={secProject.producer}
              image={secProject.image ? secProject.image.url : ''}
              video={secProject.video}
          />
      ))}
  </div>
);
};


export default SecProjects;