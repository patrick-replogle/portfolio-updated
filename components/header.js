import Link from 'next/link';

import style from '../styles/header.module.scss';

const Header = () => {
  return (
    <div className={style.nav}>
      <div className={style.left}>
        <h3>Patrick Replogle</h3>
      </div>
      <div className={style.right}>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
};

export default Header;
