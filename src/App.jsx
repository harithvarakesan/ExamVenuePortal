import {useState} from 'react'
import './App.css'
import Home from './components/Home'
import Header from './components/Header'
import Sidebar from './components/Sidebar'

import Examvenue from './components/examvenue'
import Skillvenue from './components/skillvenue'
import Revaluation from './components/revaluation'
import Result from './components/result'
import Dashboard from './components/Dashboard'
import { BrowserRouter as Main,Route,Routes } from 'react-router-dom'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Main>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route exact path='/examvenue' element={<Examvenue />} />
        <Route exact path='/skillvenue' element={<Skillvenue />} />
        <Route exact path='/revaluation' element={<Revaluation />} />
        <Route exact path='/result' element={<Result />} />
      </Routes>
      </Main>
    </div>
  )
}

export default App
