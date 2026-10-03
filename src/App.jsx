import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import AddJob from './pages/AddJob.jsx';
import HomePage from './pages/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
function App() {

  return (
  <BrowserRouter>
    <Navbar />

  <Routes>
    <Route path='/' element={<HomePage />} />
    <Route path='/add-job' element={<AddJob />} />
    <Route path='*' element={<NotFoundPage />} />
  </Routes>
    


 

  </BrowserRouter>
  )
  }
  export default App