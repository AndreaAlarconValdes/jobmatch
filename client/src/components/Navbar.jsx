import { NavLink } from 'react-router'
import { Link } from './Link'
import { useAuthStore } from '../store/authStore'
import { useFavoritesStore } from '../store/favoritesStore'

export function Navbar() {
  const { isLoggedIn } = useAuthStore()
  const { countFavorites } = useFavoritesStore()

  const numberOfFavorites = countFavorites()

  return (
    <header>
      <Link href='/' className='logo-link'>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-briefcase"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2" /><path d="M12 12l0 .01" /><path d="M3 13a20 20 0 0 0 18 0" /></svg>
          JobMatch
      </Link>

      <nav>
        <NavLink
          className={({ isActive }) => isActive ? 'nav-link-active' : ''}
          to="/">Home</NavLink>
        <NavLink
          className={({ isActive }) => isActive ? 'nav-link-active' : ''}
          to="/search">Find Jobs</NavLink>
        {
          isLoggedIn && (
            <NavLink
              className={({ isActive }) => isActive ? 'nav-link-active' : ''}
              to="/profile">
              My Profile {numberOfFavorites}
            </NavLink>
          )
        }
      </nav>

      <HeaderUserButton />

    </header>
  )
}

const HeaderUserButton = () => {
  const { isLoggedIn, login, logout } = useAuthStore()
  const { clearFavorites } = useFavoritesStore()

  const handleLogout = () => {
    logout()
    clearFavorites()
  }

  return isLoggedIn
    ? <button onClick={handleLogout}>Cerrar sesión</button>
    : <button onClick={login}>Sign in</button>
}