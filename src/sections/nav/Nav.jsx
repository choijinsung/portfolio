import Logo from '../../assets/logo.jpg'
import data from './data'
import {IoIosChatboxes} from 'react-icons/io'
import './nav.css'


const Nav = () => {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav_logo'>
          <img src={Logo} alt="Logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon'><IoIosChatboxes /></button>
      </div>
    </nav>
  )
}

export default Nav