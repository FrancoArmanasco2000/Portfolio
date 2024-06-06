import './App.css'
import { Header } from './components/Header'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Home } from './components/Home'
import { Project } from './components/Project'
import sgl from './assets/sgl.jpeg'
import notepad from './assets/notepad.jpg'
import fedefit from './assets/fedefit.jpg'

function App() {

  return (
    <div className='app-container'>
      <div className='background-1'></div>
      <div className='background-2'></div>
      <Header />
      <Home />
      <About />
      <Skills />
      <h1 style={{marginBottom:'30px'}}>Proyectos</h1>
      <div className='container-projects'>
        <Project title='SGL' image={sgl} linkGithub='https://github.com/FrancoArmanasco2000/SGL_RETAIL'/>
        <Project title='Notepad' image={notepad} linkPage='http://notepad-farm.surge.sh/' linkGithub='https://github.com/FrancoArmanasco2000/Notepad'/>
        <Project title='FedeFit' image={fedefit} linkPage='https://fedefit.surge.sh/'/>
      </div>
      <Contact />
    </div>
  )
}

export default App
