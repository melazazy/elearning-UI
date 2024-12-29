import React from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import HomePage from './components/HomePage';
    import Dashboard from './components/Dashboard';
    import VirtualClassroom from './components/VirtualClassroom';
    import SubscriptionPage from './components/SubscriptionPage';
    import Notifications from './components/Notifications';

    function App() {
      return (
        <div>
          <header className="header">
            <h1>E-Learning Platform</h1>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/classroom">Classroom</Link>
              <Link to="/subscription">Subscription</Link>
              <Link to="/notifications">Notifications</Link>
            </nav>
          </header>
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/classroom" element={<VirtualClassroom />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route path="/notifications" element={<Notifications />} />
            </Routes>
          </div>
        </div>
      );
    }

    export default App;
