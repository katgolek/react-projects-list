import { useState } from 'react';
import projects from './data';


const Project = () => {
   const [index, setIndex] = useState(0); 
   const {title, details, image} = projects[index];

   const checkNumber = (number) =>{
        if (number > projects.length -1){
            return 0;
        }
        if(number < 0){
            return projects.length -1;
        }
        return number;
   };
   const nextProject = () => {
        setIndex((index) => {
            let newIndex = index +1;
            return checkNumber(newIndex);
        })
   };
   const prevProject = ()=>{
        setIndex((index) => {
            let newIndex = index -1;
            return checkNumber(newIndex);
        })
   };
   return (
   <article className="project-card">
       <div class="project-image">
        <img src={image} alt={title}/>
       </div>
       <div className="project-card-content">
            <h1 className="project-card-header">{title}</h1>
            <div className="project-card-buttons">
                <button onClick = {prevProject} className="btn">Previous</button>
                <button onClick = {nextProject} className="btn">Next</button>
            </div>
       </div>
       <div className="project-footer">
            <p>{details}</p>
            <p>{index +1}/ {projects.length}</p>
        </div>
   </article>
    
  );
};

export default Project;