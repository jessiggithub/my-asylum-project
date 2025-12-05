## Description

I built a complete asylum data visualization application from scratch! This project demonstrates my skills in React development, API integration, authentication, and data visualization.

### What I Built:
- Interactive data visualizations (ScatterPlot, HeatMap, Choropleth maps)
- Real Auth0 authentication with login/logout
- API integration that fetches live asylum data
- Responsive design that works on all devices
- Professional landing page
- User profile dashboard

### Tech Stack I Used:
- React 18 + Vite for fast development
- Auth0 for secure authentication
- Tailwind CSS for styling
- Plotly.js for interactive charts
- Axios for API calls
- React Router for navigation

The app connects to a real API (asylum-be.onrender.com) and includes fallback data in case the API is slow. I implemented proper loading states and error handling throughout.

#### Video Link

[My Loom Demo Video](Add your loom video link here)

#### Project Repository

**My GitHub Repository**: [https://github.com/jessiggithub/my-asylum-project](https://github.com/jessiggithub/my-asylum-project)

**Live Application**: Running locally on `http://localhost:3001/`

## Type of change

- [x] New feature (complete application build)
- [x] Documentation included

## What I Implemented

**Main Dependencies:**
- `@auth0/auth0-react`: ^2.9.0 - For user authentication
- `react`: ^18.3.1 - Main framework  
- `react-plotly.js`: ^2.6.0 - Data visualizations
- `axios`: ^1.7.7 - API requests
- `tailwindcss`: Responsive styling

## Files I Created/Modified

**Core App Structure:**
- `src/App.jsx` - Main app with routing setup
- `src/main.jsx` - Entry point
- `src/context/AppContext.jsx` - Global state and API logic

**Authentication System:**
- `src/auth/Auth0ProviderWithConfig.jsx` - Auth0 setup
- `src/auth/LoggingButtons.jsx` - Login/logout buttons

**UI Components:**
- `src/components/pages/Landing/index.jsx` - Landing page
- `src/components/pages/Profile/index.jsx` - User profile
- `src/components/pages/DataVisualizations/GraphsPage.jsx` - Main visualizations
- `src/components/layout/Header.jsx` - Navigation header
- `src/components/layout/Footer.jsx` - Footer component

**Data Visualization Components:**
- `src/components/common/ScatterPlotMap.jsx` - Scatter plot charts
- `src/components/common/HeatMap.jsx` - Heat map visualization
- `src/components/common/ChoroplethMap.jsx` - Geographic maps

**Configuration:**
- `package.json` - Dependencies and project info
- `vite.config.js` - Vite setup
- `tailwind.config.js` - Tailwind configuration
- `.env` - Auth0 environment variables
- `README.md` - Project documentation

## My Testing Checklist:

- [x] Code follows project style guidelines
- [x] Self-reviewed all my code
- [x] Cleaned up console logs and unnecessary comments
- [x] No new warnings generated
- [x] Checked for spelling errors
- [x] Removed any duplicate code
- [x] Kept pull request focused and manageable
- [x] Clear description of changes and reasoning
- [x] All components properly documented
- [x] API integration tested with live and fallback data
- [x] Auth flow tested and working correctly
- [x] Responsive design verified on different screen sizes
- [x] Error handling implemented for all API calls
- [x] Loading states implemented for better user experience
