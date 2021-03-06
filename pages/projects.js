import Image from 'next/image';
import { projects } from '../util/data';

import style from '../styles/project.module.scss';

const Project = () => {
  return (
    <div className={style.container}>
      {projects.map(project => {
        return (
          <div className={style.project} key={project.id}>
            <div className={style.left}>
              <Image src={project.imgSrc} alt="project avatar" />
            </div>
            <div className={style.right}>
              <span>{project.name}</span>
              <p>{project.description}</p>
              <p>{project.techStack}</p>

              <div className={style.buttonContainer}>
                <a href={project.deployedUrl} target="_blank">
                  VIEW APP
                </a>
                {project.backendGithubUrl && (
                  <a href={project.backendGithubUrl} target="_blank">
                    BACK-END CODE
                  </a>
                )}

                <a href={project.frontendGithubUrl} target="_blank">
                  FRONT-END CODE
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Project;
