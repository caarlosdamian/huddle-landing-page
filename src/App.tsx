import './App.scss'
import { Box } from './components/Box/Box'
import { Footer } from './sections/footer/Footer'
import { Hero } from './sections/hero/Hero'
import { Top } from './sections/top/Top'

function App() {

  return (
    <main className="App">
      <Top/>
      <Hero/>
      <Footer/>
      <Box/>
    </main>
  )
}

export default App
