import React, { useEffect, useState, Suspense } from 'react'
import MainProjectCard from '../MainProjectCard/MainProjectCard';
import axios from 'axios';


const MainProject = () => {
  const URL_MAIN_PROJECT = import.meta.env.VITE_BACK_URL_MAIN; // Endpoint for fetching main project data
  const [mainProject, setMainProject] = useState(null);

  useEffect(() => {

    if (!URL_MAIN_PROJECT) {
        console.error('URL_MAIN_PROJECT is not defined');
        return;
     }
     
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
      <div className="mx-6 md:mx-6 lg:mx-8">
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

