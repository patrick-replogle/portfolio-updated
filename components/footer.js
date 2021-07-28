import style from '../styles/footer.module.scss';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.content}>
        <div className={style.icons}></div>
        <span>Patrick Replogle</span>
        <span>503-459-3818</span>
        <a href="mailto:patrickr1138@gmail.com">patrickr1138@gmail.com</a>
      </div>
    </div>
  );
};

export default Footer;
