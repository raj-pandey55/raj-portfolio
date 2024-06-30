
import './app.scss'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Parallax from './components/parallax/Parallax'
import Skills from './components/skills/Skills'

function App() {


  return (
    <>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Skills"><Parallax type="skills"/></section>
      <section>
        <Skills />
      </section>
      <section id="Portfolio"><Parallax type="portfolio"/></section>
      <section>Portfolio1</section>
      <section>Portfolio2</section>
      <section>Portfolio3</section>
      <section id="Contacts">Contact</section>
    </>
  )
}

export default App
