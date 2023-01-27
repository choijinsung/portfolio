import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="AboutImage" />
          </div>
        </div>
        <div className="about__right">
          <h2>Resume</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Dolore, aliquid. Laborum hic quis itaque rerum esse quo provident 
            praesentium voluptatibus. Illum eveniet, aperiam minima illo deleniti
            ab porro quidem nam?</p>
          <div className="about__cards">
            {
              data.map(item => (
                <Card key={item.id} className="about__card">
                  <span className='about__card-icon'>{item.icon}</span>
                  <h4>{item.title}</h4>
                  <small>{item.info}</small>
                </Card>
              ))
            }
          </div>
          <a href={CV} download className='btn primary'>DOWNLOAD<HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About