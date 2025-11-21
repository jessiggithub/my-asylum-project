import { useAuth0 } from './Auth0ProviderWithConfig.jsx';
import { Navigate } from 'react-router-dom';

/**
 * Protected Route component that requires authentication
 * Redirects to home page if user is not authenticated
 */
export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-[400px] secondary-c'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-lg text-gray-600'>Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};