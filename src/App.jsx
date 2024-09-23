import { BrowserRouter } from 'react-router-dom';

import { Home, Work, About, Contact, Test, Hero, Showreel} from './pages'
import Navbar from './components/Navbaralt';



const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <BrowserRouter>
          <div>
            <Navbar />
            <Hero/>
          </div>
          <Showreel/>
          <Work/> 
          {/* <About/> */}
          <Contact/> 
        </BrowserRouter>
    </main>
  )
}

export default App