import data from './data'
import Card from '../../components/Card'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h2>Services</h2>
      <p>올라운드 서비스를 제공합니다</p>
      <div className="container services__container">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4>{item.title}</h4>
                <p>{item.info}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services