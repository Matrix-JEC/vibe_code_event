import react from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Human from './humans';
import Register from './register';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Human/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
