import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Login from './components/Login';

function App() {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  const handleLogin = (newToken: string, newRole: string) => {
    setToken(newToken);
    setRole(newRole);
  };

  if (!token) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header role={role} />
      <main className="container mx-auto px-4 py-8">
        <Dashboard token={token} />
      </main>
    </div>
  );
}

export default App;