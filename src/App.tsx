import './App.scss'
import { Footer } from './sections/footer/Footer'
import { Hero } from './sections/hero/Hero'
import { Top } from './sections/top/Top'

function App() {

  return (
    <main className="App">
      <Top/>
      <Hero/>
      <Footer/>
    </main>
  )
}

export default App
