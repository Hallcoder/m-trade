import { useState } from 'react'
import NavBar from './components/Navbar';
import TopNav from './components/TopNav'
import HomeMain from './components/Main';
import Perks from './components/Perks';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-[#F8F8F8]">
     <TopNav />
     <NavBar />
     <HomeMain />
     <Perks />
     <Footer />
    </div>
  )
}

export default App;
