import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import TopNav from './components/TopNav';
import Dashboard from './components/Dashboard';
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import ListPage from './pages/ListPage';
import SettingsPage from './pages/SettingsPage';
import SidebarPlusContent from './components/layout/SidebarPlusContent';
import MainSidebarContent from './components/layout/MainSidebarContent'; // 대시보드용 사이드바 내용

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', overflow: 'hidden' }}>
            <TopNav />
            <SidebarPlusContent
              sidebarContent={<MainSidebarContent />}
              mainContent={<Dashboard />}
            />
          </div>
        }
      />
      <Route
        path="/category/:name"
        element={
          <>
            <TopNav />
            <CategoryPage />
          </>
        }
      />
      <Route
        path="/category/:name/:sub"
        element={
          <>
            <TopNav />
            <SubcategoryPage />
          </>
        }
      />
      <Route
        path="/category/:name/:sub/list"
        element={
          <>
            <TopNav />
            <ListPage />
          </>
        }
      />
      <Route
        path="/settings"
        element={
          <>
            <TopNav />
            <SettingsPage />
          </>
        }
      />
      <Route
        path="/community"
        element={
          <>
            <TopNav />
            <h1>커뮤니티 페이지</h1>
          </>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
