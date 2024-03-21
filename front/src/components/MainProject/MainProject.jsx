import React, { useEffect, useState } from 'react'
import MainProjectCard from '../MainProjectCard/MainProjectCard';
import axios from 'axios';

const MainProject = () => {
  const URL_MAIN_PROJECT = "http://localhost:3000/admin/mainProject"; // Endpoint for fetching main project data
  const [mainProject, setMainProject] = useState(null);

  useEffect(() => {
    axios.get(URL_MAIN_PROJECT)
        .then(response => {
            // Extract the main project from the array
            const mainProjectData = response.data.find(project => project.isMain === true);
            setMainProject(mainProjectData);
        })
        .catch(error => {
            console.log('Error fetching main project:', error);
        });
}, []);

  return (
      <div>
          {mainProject && (
              <div>
                  <MainProjectCard 
                      video={mainProject.video}
                      title={mainProject.title}
                      producer={mainProject.producer}
                      image={mainProject.image.url}
                  />
              </div>
          )}
      </div>
  );
};

export default MainProject;

