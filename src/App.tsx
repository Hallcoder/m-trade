import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TopNav from './components/TopNav'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<TopNav />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
