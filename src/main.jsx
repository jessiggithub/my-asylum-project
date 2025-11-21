import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ProvideAppContext } from './context/AppContext.jsx';
import { Auth0ProviderWithConfig } from './auth/Auth0ProviderWithConfig.jsx';

const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;

/**
 * Root application with Auth0 authentication and App context
 * Auth0Provider wraps the entire app to provide authentication state
 */
createRoot(document.getElementById('root')).render(
  <Auth0ProviderWithConfig>
    <ProvideAppContext>
      <App />
    </ProvideAppContext>
  </Auth0ProviderWithConfig>
);
