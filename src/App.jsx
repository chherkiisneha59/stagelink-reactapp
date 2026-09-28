import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Explore from './pages/Explore'
import ArtistDetails from './pages/ArtistsDetails'
import Booking from './pages/Booking'
import BecomeArtists from './pages/BecomeArtists'
import Contact from './pages/Contact'
import Login from './pages/Login'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/artists" element={<Explore />} />
        <Route path="/artist/:id" element={<ArtistDetails />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/become-artist" element={<BecomeArtists />} />
        <Route path="/become-artists" element={<BecomeArtists />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
