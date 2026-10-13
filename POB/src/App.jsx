import { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import NavBar from './theComponents/NavBar.jsx';
import Home from './pages/Home/Page.jsx';
import Explore from './pages/Explore/Explore.jsx';
import Me from './pages/Me/Me.jsx';
import Friends from './pages/Friends/Friends.jsx';
import BayelsaLife from './pages/BayelsaLife/BayelsaLife.jsx';

function App() {
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
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/friends" element={<Friends />} />

        <Route path="/BayelsaLife" element={<BayelsaLife />} />
        <Route path="/me" element={<Me />} />

      </Routes>


      <NavBar
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode((darkMode) => !darkMode)}
      />
    </div>
  )
}

export default App