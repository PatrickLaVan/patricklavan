import { Route, Routes} from 'react-router-dom';
import { baseName } from '../router';
import { Home, Work, About, Contact, Test, Hero, Showreel} from './pages'
import Navbar from './components/Navbaralt';



const App = () => {
  return (
    <main className='bg-slate-300/20'>
        <Routes>
          <Route path={`/${baseName}`} element= {<Home/>}/>
              
          
            
          
          
        
           
        </Routes>
    </main>
  )
}

export default App