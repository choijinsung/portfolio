import Nav from './sections/nav/Nav';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Reviews from './sections/review/Reviews';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import ResponsiveNav from './sections/responsive-nav/ResponsiveNav';
import FloatingNav from './sections/floating-nav/FloatingNav';

const App = () => {
  return (
    <main>
      <Nav />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Reviews />
      <FAQs />
      <Contact />
      <Footer />
      <ResponsiveNav />
      <FloatingNav />
    </main>
  )
}

export default App