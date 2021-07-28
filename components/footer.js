import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import style from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.content}>
        <div className={style.icons}>
          <a
            href="https://www.linkedin.com/in/patrick-replogle/"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className={style.icon}
              style={{ marginTop: '1%' }}
            />
          </a>
          <a href="https://github.com/patrick-replogle" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className={style.icon}
              style={{ marginLeft: '20%' }}
            />
          </a>
        </div>
        <span>Patrick Replogle</span>
        <span>503-459-3818</span>
        <a href="mailto:patrickr1138@gmail.com">patrickr1138@gmail.com</a>
      </div>
    </div>
  );
};

export default Footer;
