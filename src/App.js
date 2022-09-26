/** @format */

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mission from './pages/Mission';
import Profile from './pages/Profile';
import Rocket from './pages/Recket';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Rocket />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
