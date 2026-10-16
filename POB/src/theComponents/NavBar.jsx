import { Link } from 'react-router';
import {
  House,
  Compass,
  Newspaper,
  Users,
  BuildingComplex,
  FaceSlightlySmiling,
  Moon,
  Sun,
} from 'lucide-react';

function NavBar({ isDarkMode, onToggleTheme }) {

  const links = [
    { name: 'Welcome', href: '/', icon: <House /> },
    { name: 'Feed', href: '/home', icon: <Newspaper strokeWidth={1.5} /> },
    { name: 'Explore', href: '/explore', icon: <Compass strokeWidth={1.5} /> },
    { name: 'Friends', href: '/friends', icon: <Users strokeWidth={1.5} /> },
    { name: 'Lifestyle', href: '/BayelsaLife', icon: <BuildingComplex strokeWidth={1.5} /> },
    { name: 'Me', href: '/Me', icon: <FaceSlightlySmiling strokeWidth={1.5} /> },
  ];
  return (
    <div>

      <nav className="fixed bottom-4 left-0 right-0 mx-auto flex w-fit items-center gap-4 rounded-2xl border border-border bg-background/90 p-4 shadow-lg backdrop-blur text-muted-foreground">
        <ul className="flex flex-row justify-center gap-4">
          {links.map((link) => (
            <Link to={link.href} key={link.href}>
              <div className="flex flex-col items-center">
                <div>{link.icon}</div>
                <li>
                  <div>{link.name}</div>
                </li>
              </div>
            </Link>
          ))}
        </ul>
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className="rounded-lg p-2 transition-colors hover:bg-muted focus-visible:outline-2 focus-visible:outline-ring"
        >
          {isDarkMode ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
        </button>
      </nav>
    </div >
  )
}
export default NavBar
