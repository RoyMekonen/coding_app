import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import BlockCodes from './components/BlockCodes'
import '../node_modules/highlight.js/styles/magula.css'
import BlockCode from './components/BlockCode';

export default function App() {
  return (
    <div>
        <Router>
        <Routes>
          <Route path='/:userId' element={<BlockCodes />}/>
          <Route path='/:userId/room/:id' element={<BlockCode />}/>
          <Route path='/' element={<LoginPage />} />
        </Routes>
      </Router> 
    </div>
  )
}
