import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import './App.css'
import NavBar from './components/Navbar';
import TopNav from './components/TopNav'
import HomeMain from './components/Main';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)
  return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/"
						element={
							<div className="bg-[#F8F8F8]">
								<TopNav />
								<NavBar />
								<HomeMain />
								<Footer />
							</div>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
