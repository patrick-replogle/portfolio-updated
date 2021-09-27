import Image from 'next/image';

import styles from '../styles/about.module.scss';

import { skills } from '../util/data.js';

import portrait from '../public/images/portrait2.jpg';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.left}>
          <Image src={portrait} alt="portrait" />
        </div>
        <div className={styles.right}>
          <h1>About Me</h1>
          <p>
            I'm a full stack web developer and Lambda School graduate based in
            Portland, OR. My extensive background in sales and customer service
            has honed my ability to work effectively on teams of all sizes,
            while my decades of experience as an audio engineer/musician has
            trained me to appreciate the lifelong learning process that comes
            with mastering a difficult craft. I'm always willing to work on an
            interesting project or learn a new technology.
          </p>
          <p>
            In my spare time I enjoy performing and recording music, reading,
            hiking with my dog Elvis, and searching for the ultimate burrito.
          </p>
          <p>Some technologies I've been working with recently:</p>
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
