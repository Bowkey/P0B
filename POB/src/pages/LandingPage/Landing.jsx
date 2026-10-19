import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  MapPin,
  ShoppingBag,
  Sparkles,
  Users,
  Toolbox,
  Houses,
  Menu,
  Moon,
  Sun,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';
import mainLogo from '/logo.png'
import Faq from './Faq.jsx';
const destinations = [
  {
    title: 'What’s happening',
    description: 'Find local events, meetups, and things to do around Bayelsa.',
    category: 'Events',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWx1kRb6x9XzPTkINCF23KHqr17JzCridoak0H7_83Q&s=10',
    icon: CalendarDays,
    accent: 'bg-amber-100 text-amber-800',
  },
  {
    title: 'Make your next move',
    description: 'Discover opportunities and share your skills with the community.',
    category: 'Jobs',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVEXnQr9boaut-8Hs-WmPnGNE95NklVPpHYTZDrMuHug&s=10',
    icon: BriefcaseBusiness,
    accent: 'bg-sky-100 text-sky-800',
  },
  {
    title: 'Find an Expert',
    description: 'Connect with plumber, hairdresser, caterer, babers, electrician and more ',
    category: 'Profession',
    image:
      'https://www.bellanaija.com/wp-content/uploads/2023/07/IMG_6830.jpg',
    icon: Toolbox,
    accent: 'bg-amber-100 text-amber-800',
  },
  {
    title: 'Where to stay',
    description: 'Find apartments, shop rentals, lands, short-lets, roomates.',
    category: 'Housing',
    image:
      'https://mowi.bayelsastate.gov.ng/wp-content/uploads/2025/09/IMG_20250211_143630_0.jpg',
    icon: Houses,
    accent: 'bg-amber-100 text-amber-800',
  },
  {
    title: 'Shop close to home',
    description: 'Browse local finds, small businesses, and useful services.',
    category: 'Market',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt89W-tTWqbjepxoXfNXBzLQVkliHZCxtY4B9aDeGpLQ&s=10',
    icon: ShoppingBag,
    accent: 'bg-rose-100 text-rose-800',
  },
];

function Landing({ isDarkMode, onToggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="overflow-x-clip pb-28">
      <header className="sticky -top-2 z-50 mx-auto max-w-7xl bg-background/95 px-5 py-2 backdrop-blur sm:px-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5" aria-label="People of Bayelsa home">
            <div className="grid size-10 place-items-center rounded-2xl text-white">

              <img
                alt="logo"
                src={mainLogo}
              />



              {/* <Waves size={21} aria-hidden="true" /> */}
            </div>
            <span className="text-sm font-black leading-tight tracking-wide text-teal-950 dark:text-teal-50">
              PEOPLE OF
              <br />
              BAYELSA
            </span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium text-foreground/75 md:flex">
            <a href="#discover" className="transition-colors hover:text-teal-700">Discover</a>
            <Link to="/explore" className="transition-colors hover:text-teal-700">Explore</Link>
            <Link to="/friends" className="transition-colors hover:text-teal-700">Community</Link>
          </nav>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              className="grid size-10 place-items-center rounded-full border border-teal-900/10 text-teal-900 hover:bg-teal-900/5 focus-visible:outline-2 focus-visible:outline-ring dark:border-white/10 dark:text-teal-100 dark:hover:bg-white/10 "
            >
              {isDarkMode ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
            <Link
              to="/signin"
              className="hidden items-center gap-2 rounded-full bg-teal-800 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:-translate-y-0.5 hover:bg-teal-700 md:inline-flex"
            >
              Sign In <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className="grid size-10 place-items-center rounded-full border border-teal-900/10 text-teal-900 transition-all duration-200 hover:bg-teal-900/5 active:scale-90 focus-visible:outline-2 focus-visible:outline-ring dark:border-white/10 dark:text-teal-100 dark:hover:bg-white/10 md:hidden"
            >
              <span className={`transition-transform duration-200 ${isMenuOpen ? 'rotate-90 scale-90' : 'rotate-0 scale-100'}`}>
                {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mt-4 flex animate-in fade-in slide-in-from-top-2 flex-col gap-1 border-t border-teal-900/10 pt-3 text-sm font-medium text-foreground duration-200 dark:border-white/10 md:hidden"
          >
            <a
              href="#discover"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-3 transition-colors hover:bg-teal-900/5 dark:hover:bg-white/10"
            >
              Discover
            </a>
            <Link
              to="/explore"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-3 transition-colors hover:bg-teal-900/5 dark:hover:bg-white/10"
            >
              Explore
            </Link>
            <Link
              to="/friends"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg px-3 py-3 transition-colors hover:bg-teal-900/5 dark:hover:bg-white/10"
            >
              Community
            </Link>
            <Link
              to="/signin"
              onClick={() => setIsMenuOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-teal-800 px-5 py-3 font-semibold text-white shadow-lg shadow-teal-900/15 transition hover:bg-teal-700"
            >
              Sign in <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </nav>
        )}
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-16 pt-8 sm:px-8 md:grid-cols-[1.02fr_0.98fr] md:gap-14 md:pb-24 md:pt-14">
        <div className="relative z-10">
          {/* <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-800/10 bg-white/80 px-4 py-2 text-sm font-medium text-teal-900 shadow-sm dark:bg-white/10 dark:text-teal-100">
            <MapPin size={15} aria-hidden="true" />
            Made for the people of Bayelsa
          </span> */}
          <h1 className="max-w-2xl text-5xl font-black leading-[1.04] tracking-tight text-teal-950 dark:text-white sm:text-6xl lg:text-7xl">
            Our people.
            <br />
            <span className="text-teal-600 dark:text-teal-300">Our place.</span>
            <br />
            Our stories.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A vibrant home for Bayelsans to find what’s happening, support local
            businesses, discover opportunities, and stay connected.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/home"
              className="inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 font-semibold text-white shadow-xl shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-teal-600"
            >
              Explore Community <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href="#discover"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 font-semibold text-teal-900 transition hover:bg-teal-900/5 dark:text-teal-100 dark:hover:bg-white/10"
            >
              Take a look <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="mt-9 flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
            <span className="flex -space-x-2" aria-hidden="true">
              <span className="size-8 rounded-full border-2 border-background bg-amber-300" />
              <span className="size-8 rounded-full border-2 border-background bg-rose-300" />
              <span className="size-8 rounded-full border-2 border-background bg-teal-400" />
            </span>
            <span>A place to connect, share, and belong.</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[2.5rem] bg-linear-to-br from-teal-300/50 via-emerald-200/30 to-amber-200/60 blur-2xl" />
          <div className="relative h-97.5 overflow-hidden rounded-[2rem] shadow-2xl shadow-teal-950/20 sm:h-122.5">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpV-o-K8XqMbJJg7ItLylh-iXAxsuxz8KCRIPWUZkXg&s=10"
              alt="image of tombia round-about, Yenagoa"
              className="h-full w-full "
            />
            <div className="absolute inset-0 bg-linear-to-t from-teal-950/75 via-teal-950/5 to-transparent" />
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-teal-950 shadow-lg backdrop-blur">
              <Sparkles size={16} className="text-amber-500" aria-hidden="true" />
              Rooted in Bayelsa
            </div>
            <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-9">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-teal-200">
                A community that feels like home
              </p>
              <p className="max-w-sm text-3xl font-bold leading-tight sm:text-4xl">
                Many voices. One Bayelsa.
              </p>
            </div>
          </div>
          {/* <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-2xl border border-white/70 bg-white p-4 shadow-xl dark:border-white/10 dark:bg-slate-900 sm:-left-8">
            <span className="grid size-11 place-items-center rounded-xl bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
              <Users size={21} aria-hidden="true" />
            </span>
            <span>
              <span className="block text-sm font-bold text-slate-900 dark:text-white">Your community</span>
              <span className="block text-xs text-slate-500 dark:text-slate-400">Starts right here</span>
            </span>
          </div> */}
        </div>
      </section>

      <section id="discover" className="bg-teal-950 py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-9 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">
                A little bit of everything
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Find your way around
              </h2>
            </div>
            <Link
              to="/home"
              className="inline-flex items-center gap-2 font-semibold text-teal-200 transition hover:text-white"
            >
              See what’s new <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {destinations.map((destination) => {
              const Icon = destination.icon;

              return (
                <Link
                  to="/home"
                  key={destination.title}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] transition hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={destination.image}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className={`absolute left-4 top-4 grid size-10 place-items-center rounded-xl ${destination.accent}`}>
                      <Icon size={19} aria-hidden="true" />
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-300">
                      {destination.category}
                    </p>
                    <h3 className="text-xl font-bold">{destination.title}</h3>
                    <p className="mt-2 min-h-12 text-sm leading-6 text-teal-100/70">
                      {destination.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                      Explore <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-14 sm:px-8 sm:py-16 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-300">
            Your story belongs here
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-teal-950 dark:text-white sm:text-4xl">
            Bayelsa is better when we build it together.
          </h2>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            Come for the updates. Stay for the people, ideas, and local gems you’ll find along the way.
          </p>
        </div>
        <Link
          to="/home"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-amber-400 px-6 py-3.5 font-bold text-teal-950 shadow-lg shadow-amber-900/10 transition hover:-translate-y-0.5 hover:bg-amber-300"
        >
          Get started <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </section>
      {/* this would be for the FAQ */}
      <Faq />


      <footer className="border-t border-border/70 px-5 py-6 text-center text-sm text-muted-foreground">
        People of Bayelsa · Made for community, connection, and local stories.
      </footer>
    </main>
  );
}

export default Landing;
