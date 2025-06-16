import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import CreateNote from './pages/Create'
import Note from './pages/Note'
import { toast } from 'react-hot-toast'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-base-300" data-theme="forest">
      
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateNote />} />
        <Route path="/note/:id" element={<Note />} />
      </Routes>
    </div>
  )
}

export default App
