import { BrowserRouter } from 'react-router-dom';

import { Home, Work, About, Contact } from './pages'
import Navbar from './components/Navbaralt';

const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <BrowserRouter>
          <div>
            <Navbar />
            <Home/>
          </div>
          <Work/>
          <About/>
          <Contact/> 
        </BrowserRouter>
    </main>
  )
}

export default App