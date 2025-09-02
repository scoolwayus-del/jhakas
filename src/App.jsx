import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Affiliates from './pages/Affiliates'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/affiliates' element={<Affiliates />} />
      </Routes>
    </div>
  )
}

export default App