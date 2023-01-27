import HeaderImage from '../../assets/header.jpg';
import data from './data';
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="프로필 사진" />
        </div>
        <h3>이주원/Joo Won Lee/李珠媛</h3>
        <p>프론트엔드를 중심으로하며 백엔드를 이해하고<br/>
          모던 웹과 개발의 원리 모두를 다루며,<br/>
          개발 외에도 기획과 디자인을 다룰 수 있는<br/>
          올라운드 인재입니다.
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'>CONTACT</a>
          <a href="#portfolio" className='btn light'>PORTFOLIO</a>
        </div>
        <div className="header__sns">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank"
            rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header