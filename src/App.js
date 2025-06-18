import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import MainPanel from './components/Dashboard';

import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import ListPage from './pages/ListPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <TopNav />
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <Sidebar />
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <Routes>
              <Route
                path="/"
                element={
                  <div style={{
                    flex: 1,
                    height: '100%',
                    backgroundColor: '#fff',
                    padding: '24px',
                    boxSizing: 'border-box',
                    overflow: 'hidden'
                  }}>
                    <MainPanel />
                  </div>
                }
              />
              <Route path="/community" element={<h1>커뮤니티 페이지</h1>} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/category/:name" element={<CategoryPage />} />
              <Route path="/category/:name/:sub" element={<SubcategoryPage />} />
              <Route path="/category/:name/:sub/list" element={<ListPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
