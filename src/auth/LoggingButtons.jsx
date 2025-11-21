import { useAuth0 } from './Auth0ProviderWithConfig.jsx';

export const LoggingButtons = () => {
  const { isAuthenticated, isLoading, loginWithRedirect, logout, error } = useAuth0();

  const handleClick = async () => {
    console.log('🖱️ Button clicked!', { 
      isAuthenticated, 
      isLoading, 
      error,
      loginFunction: typeof loginWithRedirect,
      currentURL: window.location.origin
    });
    
    if (isAuthenticated) {
      console.log('🚪 Logging out...');
      logout();
    } else {
      console.log('🔐 Starting login...');
      try {
        await loginWithRedirect();
      } catch (err) {
        console.error('❌ Login error:', err);
      }
    }
  };

  if (isLoading) {
    return (
      <button className='nav-btn px-4 py-1' disabled>
        Loading...
      </button>
    );
  }

  return (
    <button 
      className='nav-btn px-4 py-1 cursor-pointer hover:bg-blue-700' 
      onClick={handleClick}
    >
      {isAuthenticated ? 'Log Out' : 'Log In'}
    </button>
  );
};