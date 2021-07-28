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
              style={{
                width: '40px',
                height: '40px',
                margin: '1%',
                cursor: 'pointer'
              }}
            />
          </a>
          <a href="https://github.com/patrick-replogle" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              style={{
                width: '40px',
                height: '40px',
                marginLeft: '20%',
                cursor: 'pointer'
              }}
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
