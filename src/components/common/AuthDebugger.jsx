import { useAuth0 } from '../auth/Auth0ProviderWithConfig.jsx';

export const AuthDebugger = () => {
  const auth = useAuth0();
  
  const handleTestLogin = () => {
    console.log('🔍 Testing login...');
    console.log('Auth object:', auth);
    if (auth.loginWithRedirect) {
      auth.loginWithRedirect();
    } else {
      console.error('loginWithRedirect not found');
    }
  };

  return (
    <div className="fixed top-4 right-4 bg-gray-800 text-white p-4 rounded-lg z-50 max-w-sm">
      <h3 className="font-bold mb-2">Auth Debug</h3>
      <div className="text-xs space-y-1">
        <p>Authenticated: {auth.isAuthenticated ? '✅' : '❌'}</p>
        <p>Loading: {auth.isLoading ? '⏳' : '✅'}</p>
        <p>User: {auth.user ? auth.user.name : 'None'}</p>
      </div>
      <button 
        onClick={handleTestLogin}
        className="mt-2 bg-blue-500 text-white px-2 py-1 rounded text-xs"
      >
        Test Login
      </button>
    </div>
  );
};