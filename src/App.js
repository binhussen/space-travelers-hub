/** @format */

import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Reckets';
import store from './redux/configureStore';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Rockets />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
