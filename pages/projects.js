import Image from 'next/image';
import { projects } from '../util/data';

const Project = () => {
  console.log(projects);
  return (
    <div>
      {projects.map(p => {
        return (
          <div>
            <p>hello</p>
            <Image src={p.imgSrc} />
          </div>
        );
      })}
    </div>
  );
};

export default Project;
