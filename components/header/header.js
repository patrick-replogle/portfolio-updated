import Link from 'next/link';

import style from '../../styles/header.module.scss';

const Header = () => {
  return (
    <div className={style.header}>
      <h1>Patrick Replogle</h1>
      <div className="headerLinks">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
