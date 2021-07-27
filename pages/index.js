import { skills } from '../util/data.js';

const Home = () => {
  return (
    <div>
      <p>
        I am a full stack web developer and music nerd at heart from Portland,
        OR. Feel free to get in touch if you want to network or collaborate on a
        project.
      </p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
