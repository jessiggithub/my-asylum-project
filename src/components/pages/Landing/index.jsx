import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // Navigate to the Human Rights First homepage
    window.open('https://humanrightsfirst.org', '_blank');
  };

  const handleViewGraphs = () => {
    navigate('/graphs');
  };

  const handleDownloadData = () => {
    downloadCSV();
  };

  return (
    <div className='flex-c w-full min-h-screen secondary-c'>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-16 px-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Human Rights First
          </h1>
          <h2 className="text-2xl md:text-3xl text-blue-600 font-semibold mb-8">
            Asylum Office Grant Rate Tracker
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl">
            The Asylum Office Grant Rate Tracker provides asylum seekers, legal practitioners, 
            researchers, and the public with interactive data visualizations of asylum decisions 
            made by the U.S. Immigration and Customs Enforcement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleViewGraphs}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
            >
              View the Data
            </button>
            <button 
              onClick={handleDownloadData}
              className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
            >
              Download Data
            </button>
            <button 
              onClick={handleReadMore}
              className="bg-transparent hover:bg-blue-50 text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 transition duration-300"
            >
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Explore Asylum Data Like Never Before
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 - Interactive Charts */}
            <div className="text-center p-6">
              <div className="mb-6">
                <img 
                  src={pieChart} 
                  alt="Interactive Pie Charts" 
                  className="w-32 h-32 mx-auto object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Interactive Charts
              </h4>
              <p className="text-gray-600">
                Visualize asylum grant rates with dynamic pie charts that break down 
                decisions by different categories and time periods.
              </p>
            </div>

            {/* Feature 2 - Trend Analysis */}
            <div className="text-center p-6">
              <div className="mb-6">
                <img 
                  src={lineGraph} 
                  alt="Trend Analysis" 
                  className="w-32 h-32 mx-auto object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Trend Analysis
              </h4>
              <p className="text-gray-600">
                Track changes in asylum grant rates over time with comprehensive 
                line graphs and historical data analysis.
              </p>
            </div>

            {/* Feature 3 - Comparative Data */}
            <div className="text-center p-6">
              <div className="mb-6">
                <img 
                  src={barGraph} 
                  alt="Comparative Analysis" 
                  className="w-32 h-32 mx-auto object-contain"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Comparative Analysis
              </h4>
              <p className="text-gray-600">
                Compare asylum outcomes across different regions, time periods, 
                and demographic categories with detailed bar charts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Our Mission
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Human Rights First is an independent advocacy and action organization 
                that challenges America to live up to its ideals. We believe American 
                leadership is essential in the struggle for human rights, so we press 
                the U.S. government and private companies to respect human rights and 
                the rule of law.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our asylum data tracker helps ensure transparency in immigration 
                decisions and supports asylum seekers, legal practitioners, and 
                researchers with accessible, comprehensive data analysis tools.
              </p>
              <button 
                onClick={handleReadMore}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
              >
                Learn More About Our Work
              </button>
            </div>
            <div className="lg:order-first">
              <img 
                src={paperStack} 
                alt="Legal Documents" 
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Explore the Data?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Access comprehensive asylum decision data and create meaningful visualizations 
            to support your research, advocacy, or journalistic work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleViewGraphs}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition duration-300 shadow-lg"
            >
              Start Exploring
            </button>
            <button 
              onClick={scrollToTop}
              className="bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-lg hover:bg-white hover:text-blue-600 transition duration-300"
            >
              Back to Top
            </button>
          </div>
        </div>
      </section>

      {/* Hidden Canvas Code - Required for course submission */}
      <div className="hidden">
        {'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}
      </div>
    </div>
  );
};
