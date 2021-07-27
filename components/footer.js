import { Icon } from '@iconify/react';
import githubFill from '@iconify-icons/akar-icons/github-fill';
import linkedinIcon from '@iconify-icons/cib/linkedin';

import style from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.content}>
        <div className={style.icons}>
          <Icon icon={githubFill} />
          <Icon icon={linkedinIcon} />
        </div>
        <p>Patrick Replogle</p>
        <p>503-459-3818</p>
        <p>patrickr1138@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
