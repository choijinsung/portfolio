import faqs from './data'
import FAQ from './FAQ'
import './faqs.css'

const FAQs = () => {
  return (
    <section id="faqs">
      <h2>자주 묻는 질문</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi assumenda maiores eaque. Soluta necessitatibus culpa accusamus officiis, reiciendis doloremque numquam quos atque, expedita esse commodi aliquid, ut assumenda optio qui!</p>
      <div className="container faqs__container">
        {
        faqs.map(faq => (
            <FAQ key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default FAQs