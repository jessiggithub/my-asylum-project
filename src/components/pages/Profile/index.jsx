import { useAuth0 } from '../../../auth/Auth0ProviderWithConfig.jsx';
import { Navigate } from 'react-router-dom';

/**
 * Profile page component that displays user information
 * Protected route - redirects to home if user is not authenticated
 */
const Profile = () => {
  const { isLoading, isAuthenticated, user, error } = useAuth0();

  if (isLoading) {
    return (
      <div className='flex justify-center items-center min-h-[400px] secondary-c'>
        <div className='text-center'>
          <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4'></div>
          <p className='text-lg text-gray-600'>Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center min-h-[400px] secondary-c'>
        <div className='text-center bg-red-50 border border-red-200 rounded-lg p-8'>
          <div className='text-red-600 text-xl mb-2'>⚠️ Authentication Error</div>
          <p className='text-red-700'>{error.message}</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className='flex-c w-full min-h-screen secondary-c py-8 px-4'>
      <div className='max-w-4xl mx-auto w-full'>
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          {/* Header Section */}
          <div className='bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-12 text-white text-center'>
            <div className='relative inline-block mb-4'>
              <img
                src={user?.picture || '/api/placeholder/100/100'}
                alt={user?.name || 'User'}
                className='w-24 h-24 rounded-full border-4 border-white shadow-lg mx-auto'
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/100x100/4F46E5/FFFFFF?text=' + 
                    (user?.name?.charAt(0) || 'U');
                }}
              />
            </div>
            <h1 className='text-3xl font-bold mb-2'>
              {user?.name || 'Anonymous User'}
            </h1>
            <p className='text-blue-100 text-lg'>
              Welcome to Human Rights First
            </p>
          </div>

          {/* Profile Information */}
          <div className='p-8'>
            <h2 className='text-2xl font-semibold text-gray-800 mb-6'>
              Profile Information
            </h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='space-y-4'>
                <div className='border-b border-gray-200 pb-4'>
                  <label className='block text-sm font-medium text-gray-600 mb-1'>
                    Full Name
                  </label>
                  <p className='text-lg text-gray-800'>
                    {user?.name || 'Not provided'}
                  </p>
                </div>

                <div className='border-b border-gray-200 pb-4'>
                  <label className='block text-sm font-medium text-gray-600 mb-1'>
                    Email Address
                  </label>
                  <p className='text-lg text-gray-800'>
                    {user?.email || 'Not provided'}
                  </p>
                  {user?.email_verified && (
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1'>
                      ✓ Verified
                    </span>
                  )}
                </div>

                <div className='border-b border-gray-200 pb-4'>
                  <label className='block text-sm font-medium text-gray-600 mb-1'>
                    User ID
                  </label>
                  <p className='text-sm text-gray-600 font-mono bg-gray-50 p-2 rounded'>
                    {user?.sub || 'Not available'}
                  </p>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='border-b border-gray-200 pb-4'>
                  <label className='block text-sm font-medium text-gray-600 mb-1'>
                    Nickname
                  </label>
                  <p className='text-lg text-gray-800'>
                    {user?.nickname || 'Not provided'}
                  </p>
                </div>

                <div className='border-b border-gray-200 pb-4'>
                  <label className='block text-sm font-medium text-gray-600 mb-1'>
                    Last Updated
                  </label>
                  <p className='text-lg text-gray-800'>
                    {user?.updated_at ? new Date(user.updated_at).toLocaleDateString() : 'Not available'}
                  </p>
                </div>

                <div className='border-b border-gray-200 pb-4'>
                  <label className='block text-sm font-medium text-gray-600 mb-1'>
                    Login Provider
                  </label>
                  <p className='text-lg text-gray-800 capitalize'>
                    {user?.sub?.split('|')[0] || 'Auth0'}
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className='mt-8 p-6 bg-blue-50 rounded-lg'>
              <h3 className='text-lg font-semibold text-blue-800 mb-2'>
                About Your Access
              </h3>
              <p className='text-blue-700'>
                You have full access to the Human Rights First Asylum Data Tracker. 
                You can view interactive visualizations, download data, and explore 
                asylum grant rate trends across different regions and time periods.
              </p>
            </div>

            {/* Developer Information */}
            {user && (
              <details className='mt-6'>
                <summary className='cursor-pointer text-sm font-medium text-gray-600 hover:text-gray-800'>
                  View Raw User Data (Developer Info)
                </summary>
                <pre className='mt-2 bg-gray-100 p-4 rounded text-xs overflow-auto max-h-40 text-gray-700'>
                  {JSON.stringify(user, null, 2)}
                </pre>
              </details>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
