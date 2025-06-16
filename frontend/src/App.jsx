import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import CreateNote from './pages/Create'
import Note from './pages/Note'
import { toast } from 'react-hot-toast'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradient: need to change with the color of the theme */}
      <div className="fixed inset-0 -z-10 h-full w-full [background:radial-gradient(125%_150%_at_50%_10%,#000_40%,#21B855_100%)]"></div>
      <div className="relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateNote />} />
          <Route path="/note/:id" element={<Note />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
