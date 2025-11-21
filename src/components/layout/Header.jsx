import Logo from '../../assets/logo.png';
import { LoggingButtons } from '../../auth/LoggingButtons.jsx';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '../../auth/Auth0ProviderWithConfig.jsx';

/**
 * Header component with authentication-aware navigation
 * Shows Profile link only when user is authenticated
 */
export default function Header() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <header className='flex w-[100%] primary-c justify-between px-14'>
      <div className='flex justify-between'>
        <NavLink to='https://www.humanrightsfirst.org/'>
          <img className='w-[100px]' src={Logo} alt='HRF logo white' />
        </NavLink>
      </div>
      <div className='flex items-center py-4 gap-16'>
        <NavLink to='/' className='nav-btn'>
          Home
        </NavLink>
        <NavLink to='/graphs' className='nav-btn'>
          Graphs
        </NavLink>
        {isAuthenticated && !isLoading && (
          <NavLink to='/profile' className='nav-btn'>
            Profile
          </NavLink>
        )}
        <LoggingButtons />
      </div>
    </header>
  );
}
