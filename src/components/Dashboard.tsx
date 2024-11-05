import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ResourceOverview from './ResourceOverview';
import PredictionChart from './PredictionChart';
import ResourceAllocation from './ResourceAllocation';
import DetailedResourceAllocation from './DetailedResourceAllocation';

const Dashboard: React.FC<{ token: string }> = ({ token }) => {
  const [data, setData] = useState(null);
  const [showDetailed, setShowDetailed] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/hospital-data', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Refresh every minute

    return () => clearInterval(interval);
  }, [token]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <ResourceOverview data={data.resourceOverview} />
        <PredictionChart data={data.patientInflow} />
        <ResourceAllocation suggestions={data.resourceAllocationSuggestions} />
      </div>
      <button
        onClick={() => setShowDetailed(!showDetailed)}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {showDetailed ? 'Hide' : 'Show'} Detailed Resource Allocation
      </button>
      {showDetailed && <DetailedResourceAllocation />}
    </div>
  );
};

export default Dashboard;