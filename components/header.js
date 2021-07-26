import Link from 'next/link';

import style from '../styles/header.module.scss';

const Header = () => {
  return (
    <div className={style.nav}>
      <div className="left">
        <h3>Patrick Replogle</h3>
      </div>
      <div className="right">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
