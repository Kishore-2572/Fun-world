import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../src/screens/home/Home';
import Game from '../src/screens/game/Game';
import Profile from '../src/screens/profile/Profile';
import Leaderboard from '../src/screens/leaderboard/Leaderboard';
import Logo from '../src/assets/logo.png';
import { useContext } from 'react';
import { store } from './store';
import Login from './screens/authenticate/Login';
import Signup from './screens/authenticate/Signup';

function App() {
  const { state, disPatch } = useContext(store);
  const { user } = state;

  return (
    <BrowserRouter>
      <div className="App">
        {user && (
          <header>
            <nav className="navbar">
              <div className="nav-brand">
                <a href="/">
                  {' '}
                  <img src={Logo} alt="logo" />
                </a>
              </div>
              <div className="nav-items">
                <div className="nav-item">
                  <Link to="/">Home</Link>
                </div>
                <div className="nav-item">
                  <Link to="/games">Games</Link>
                </div>
                <div className="nav-item">
                  <Link to="/leaderboard">Leaderboard</Link>
                </div>
                <div className="nav-item">
                  <a href="#help">Help</a>
                </div>
              </div>
              <div>
                <Link className="profile-pic" to={`/profile/${user._id}`}>
                  <div className="profile-name">Kishore N</div>
                  <i className="fa-solid fa-circle-user"></i>
                </Link>
              </div>
            </nav>
          </header>
        )}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/games" element={<Game />} />
            <Route path="/profile/:profileid" element={<Profile />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
