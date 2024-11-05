import React from 'react';
import { Bed, Users, Stethoscope } from 'lucide-react';

const ResourceOverview: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Current Resource Overview</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center">
          <Bed className="text-blue-500 w-8 h-8 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Available Beds</p>
            <p className="text-lg font-semibold">120 / 150</p>
          </div>
        </div>
        <div className="flex items-center">
          <Users className="text-green-500 w-8 h-8 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Staff on Duty</p>
            <p className="text-lg font-semibold">45 / 50</p>
          </div>
        </div>
        <div className="flex items-center">
          <Stethoscope className="text-purple-500 w-8 h-8 mr-2" />
          <div>
            <p className="text-sm text-gray-600">Equipment Usage</p>
            <p className="text-lg font-semibold">80%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceOverview;