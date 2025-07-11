import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import AOS from 'aos';
import Memes from './pages/Memes';


function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);


  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="memes" element={<Memes />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>  
  )
}

export default App
