import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nam, et cum asperiores illum iste alias quis vel ab, consectetur assumenda dolorem hic in ad iure dicta fugit, aspernatur modi?
      </p>
      <div className="container contact__container">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} 
          target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact