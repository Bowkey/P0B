import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router';
import NavBar from './theComponents/NavBar.jsx';
import Landing from './pages/LandingPage/Landing.jsx';
import Home from './pages/Home/Page.jsx';
import Explore from './pages/Explore/Explore.jsx';
import Me from './pages/Me/Me.jsx';
import Friends from './pages/Friends/Friends.jsx';
import BayelsaLife from './pages/BayelsaLife/BayelsaLife.jsx';
import SignIn from './auth/SignIn.jsx';

function App() {
  const { pathname } = useLocation();
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.style.colorScheme = isDarkMode ? 'dark' : 'light';
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors">
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              isDarkMode={isDarkMode}
              onToggleTheme={() => setIsDarkMode((darkMode) => !darkMode)}
            />
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/friends" element={<Friends />} />

        <Route path="/BayelsaLife" element={<BayelsaLife />} />
        <Route path="/me" element={<Me />} />
        <Route path="/signin" element={<SignIn />} />

      </Routes>

      {pathname !== '/' && (
        <NavBar
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((darkMode) => !darkMode)}
        />
      )}
    </div>
  )
}

export default App