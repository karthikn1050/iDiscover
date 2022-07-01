
import './App.css';
import Header from './Header/Header';
import { Routes,Route,BrowserRouter } from 'react-router-dom';
import Login from './Login/login'
import SelectApp from './Selectapp/selectapp'
import Home from './Home/Home';
import Trending from './Trending/Trending';
import Profile from './Profile/Profile';
function App() {
  return (
    <div >
         <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/select" element={<SelectApp />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/trending" element={<Trending />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
