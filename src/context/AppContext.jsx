import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

// API Base URL
const API_BASE_URL = 'https://asylum-be.onrender.com';

/**
 * App Context Provider with API Integration
 * Fetches data from the asylum backend API instead of using test data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(testData);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [hasInitialLoad, setHasInitialLoad] = useState(false);

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/fiscalSummary`);
      return response.data;
    } catch (error) {
      console.error('Error fetching fiscal data:', error);
      // Fallback to test data if API fails
      return testData;
    }
  };

  const getCitizenshipResults = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/citizenshipSummary`);
      return response.data;
    } catch (error) {
      console.error('Error fetching citizenship data:', error);
      // Fallback to test data if API fails
      return testData.citizenshipResults;
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
    await fetchData();
  };

  const fetchData = async () => {
    try {
      console.log('🔄 Fetching data from API...');      
      // Fetch both fiscal and citizenship data in parallel
      const [fiscalData, citizenshipData] = await Promise.all([
        getFiscalData(),
        getCitizenshipResults()
      ]);

      // Combine the data in the same structure as test_data.json
      const combinedData = {
        ...fiscalData,
        citizenshipResults: citizenshipData
      };

      console.log('✅ Data fetched successfully:', combinedData);
      setGraphData(combinedData);
      setHasInitialLoad(true);
    } catch (error) {
      console.error('❌ Error fetching data from API:', error);
      // Fallback to test data if API fails
      setGraphData(testData);
      setHasInitialLoad(true);
    } finally {
      // Always stop loading regardless of success or failure
      setIsDataLoading(false);
    }
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  // Load data on initial mount
  useEffect(() => {
    if (!hasInitialLoad) {
      fetchData();
    }
  }, [hasInitialLoad]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    clearQuery,
    getYears,
    fetchData, // Expose fetchData for manual refresh
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
