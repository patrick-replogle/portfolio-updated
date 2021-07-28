import Link from 'next/link';

import style from '../styles/header.module.scss';

const Header = () => {
  return (
    <div className={style.nav}>
      <div className={style.left}>
        <span>PATRICK REPLOGLE</span>
      </div>
      <div className={style.right}>
        <Link href="/">About</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Header;
