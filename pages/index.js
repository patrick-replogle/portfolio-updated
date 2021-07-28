import Image from 'next/image';

import styles from '../styles/about.module.scss';

import { skills } from '../util/data.js';

import portrait from '../public/images/portrait.jpg';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.left}>
          <Image src={portrait} alt="portrait" />
        </div>
        <div className={styles.right}>
          <p>
            I'm a full stack web developer and music nerd at heart from
            Portland, OR. My extensive background in sales and customer service
            has honed my ability to work effectively on teams of all sizes,
            while my decades of experience as an audio engineer/musician has
            trained me to appreciate the lifelong learning process that comes
            with mastering a difficult craft. I'm always willing to work on an
            interesting project or learn a new technology. Feel free to get in
            touch if you'd like to collaborate on a project.
          </p>
          <p>Some technologies I use:</p>
          <div className={styles.skills}>
            <ul>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
