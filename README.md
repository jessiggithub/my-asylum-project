# Asylum Data Visualization App

A comprehensive React application for visualizing asylum data with real-time API integration and Auth0 authentication.

## 🚀 Features

- **Interactive Data Visualizations**: ScatterPlot, HeatMap, and Choropleth maps
- **Real-time API Integration**: Live data from asylum-be.onrender.com
- **Secure Authentication**: Auth0 integration with login/logout functionality
- **Responsive Design**: Modern UI built with Tailwind CSS
- **Professional Landing Page**: Clean, accessible interface
- **User Profile Management**: Authenticated user dashboard

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Authentication**: Auth0 React SDK
- **Styling**: Tailwind CSS
- **Charts**: Plotly.js
- **Routing**: React Router DOM
- **HTTP Client**: Axios

## 📊 Data Visualizations

### ScatterPlot Map
Interactive scatter plot showing asylum case distributions across geographic regions.

### Heat Map  
Visual representation of case density and patterns in asylum data.

### Choropleth Map
Regional asylum data visualization with color-coded geographical boundaries.

## 🔐 Authentication

Secure user authentication powered by Auth0:
- Social login options
- Protected routes
- User profile management
- Session persistence

## 🌐 API Integration

Real-time data integration with:
- Fiscal summary endpoints
- Citizenship data summaries
- Error handling and fallback data
- Optimized API calls

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/jessiggithub/my-asylum-project.git
cd my-asylum-project
```

2. Install dependencies:
```bash
npm install
```

3. Configure Auth0:
```bash
# Create .env file with your Auth0 credentials
VITE_AUTH_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH_CLIENT_ID=your-client-id
VITE_API_BASE_URL=https://asylum-be.onrender.com
```

4. Start development server:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── auth/                 # Auth0 integration
├── components/           
│   ├── common/           # Shared components
│   ├── layout/           # Layout components
│   └── pages/            # Page components
├── context/              # React Context API
├── data/                 # Static data files
└── utils/                # Utility functions
```

## 🚢 Deployment

Ready for deployment on:
- Vercel (recommended)
- Netlify
- GitHub Pages

## 📄 License

MIT License - feel free to use this project for learning and development.

## 👤 Author

**jessiggithub**
- GitHub: [@jessiggithub](https://github.com/jessiggithub)

---

Built with ❤️ for human rights data visualization
