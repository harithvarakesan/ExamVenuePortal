import {useState} from 'react'
import './App.css'
import Home from './components//Home'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Examvenue from './components/examvenue'
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
      <Home />
      <Routes>
        <Route exact path='/examvenue' element={<Examvenue />} />
      </Routes>
      </Main>
    </div>
  )
}

export default App
