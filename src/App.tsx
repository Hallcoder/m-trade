import { useState } from 'react'
import NavBar from './components/Navbar';
import TopNav from './components/TopNav'
import HomeMain from './components/Main';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#F8F8F8]">
     <TopNav />
     <NavBar />
     <HomeMain />
    </div>
  )
}

export default App;
