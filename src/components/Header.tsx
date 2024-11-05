import React from 'react';
import { Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex items-center">
        <Activity className="text-blue-600 w-8 h-8 mr-3" />
        <h1 className="text-2xl font-bold text-gray-800">Hospital Resource Management</h1>
      </div>
    </header>
  );
};

export default Header;