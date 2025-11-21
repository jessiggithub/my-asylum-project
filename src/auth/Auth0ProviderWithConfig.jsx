import { Auth0Provider, useAuth0 as useRealAuth0 } from '@auth0/auth0-react';
import { createContext, useContext, useState } from 'react';
import { LoginModal } from '../components/common/LoginModal.jsx';

// Contexto para modo demo (fallback)
const DemoAuthContext = createContext();

const DemoAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const loginWithRedirect = async () => {
    console.log('🎭 Demo mode: Opening login modal...');
    setShowLoginModal(true);
  };

  const handleLogin = (email) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsAuthenticated(true);
      setUser({
        name: email.split('@')[0] || 'Demo User',
        email: email,
        picture: `https://via.placeholder.com/100x100/4F46E5/FFFFFF?text=${email.charAt(0).toUpperCase()}`,
        sub: `demo|${email}`,
        email_verified: true,
        nickname: email.split('@')[0],
        updated_at: new Date().toISOString(),
      });
      setIsLoading(false);
      setShowLoginModal(false);
      console.log('✅ Demo login successful for:', email);
    }, 1500);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    console.log('✅ Demo logout successful');
  };

  const value = {
    isAuthenticated,
    isLoading,
    user,
    loginWithRedirect,
    logout,
    error: null,
  };

  return (
    <DemoAuthContext.Provider value={value}>
      {children}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </DemoAuthContext.Provider>
  );
};

export const Auth0ProviderWithConfig = ({ children }) => {
  const domain = import.meta.env.VITE_AUTH_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH_CLIENT_ID;

  console.log('🔍 Auth0 Config Check:', { 
    domain: domain || 'not set', 
    clientId: clientId ? `${clientId.substring(0, 8)}...` : 'not set'
  });

  // Verificar si tenemos credenciales reales
  const hasRealCredentials = domain && 
    clientId && 
    domain !== 'tu-dominio-real.us.auth0.com' && 
    clientId !== 'tu-client-id-real' &&
    domain.includes('auth0.com');

  if (hasRealCredentials) {
    console.log('🔐 Using REAL Auth0 with domain:', domain);
    
    return (
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
        useRefreshTokens={true}
        cacheLocation="localstorage"
      >
        {children}
      </Auth0Provider>
    );
  } else {
    console.log('🎭 Using DEMO mode - Configure .env with real Auth0 credentials');
    console.log('Expected domain format: *.auth0.com, got:', domain);
    return <DemoAuthProvider>{children}</DemoAuthProvider>;
  }
};

// Hook que funciona con Auth0 real o demo
export const useAuth0 = () => {
  // Verificar si estamos en modo real Auth0
  const domain = import.meta.env.VITE_AUTH_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH_CLIENT_ID;
  
  const hasRealCredentials = domain && 
    clientId && 
    domain !== 'tu-dominio-real.us.auth0.com' &&
    clientId !== 'tu-client-id-real' &&
    domain.includes('auth0.com');

  console.log('🔍 useAuth0 hook check:', { domain, hasRealCredentials });

  if (hasRealCredentials) {
    // Usar Auth0 real - ya importado
    const auth = useRealAuth0();
    console.log('🔐 Using REAL Auth0 hook:', { 
      isAuthenticated: auth.isAuthenticated, 
      isLoading: auth.isLoading,
      user: auth.user ? 'present' : 'none'
    });
    return auth;
  } else {
    // Usar contexto demo
    const demoContext = useContext(DemoAuthContext);
    console.log('🎭 Using DEMO Auth0 hook');
    if (demoContext && Object.keys(demoContext).length > 0) {
      return demoContext;
    }
  }
  
  throw new Error('useAuth0 must be used within Auth0Provider or DemoAuthProvider');
};