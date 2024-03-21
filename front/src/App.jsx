import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './views/Home/Home'
import Admin from './views/Admin/Admin'
import About from './views/About/About'
import { Routes, Route } from 'react-router-dom';
import AdminManage from './views/Admin/AdminManage';

function App() {

  return (
    <>
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={<Admin/>} />
        <Route path="/about" element={<About/>} />
    </Routes>
      
    </>
  )
}

export default App
