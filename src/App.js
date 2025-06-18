import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard'; // MainPanel → Dashboard로 통일
import CategoryPage from './pages/CategoryPage';
import SubcategoryPage from './pages/SubcategoryPage';
import ListPage from './pages/ListPage';
import Login from './pages/LoginPage';

function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        {/* 홈 화면 (TopNav + Sidebar + Dashboard 조합) */}
        <Route path="/" element={
          <div style={{ background: '#fff', minHeight: '100vh', padding: '30px' }}>
            <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
              <Sidebar />
              <Dashboard />
            </div>
          </div>
        } />

        {/* 로그인 */}
        <Route path="/login" element={<Login />} />

        {/* 기타 페이지 */}
        <Route path="/community" element={<h1>커뮤니티 페이지</h1>} />
        <Route path="/settings" element={<h1>설정 페이지</h1>} />
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/category/:name/:sub" element={<SubcategoryPage />} />
        <Route path="/category/:name/:sub/list" element={<ListPage />} />
      </Routes>
    </Router>
  );
}

export default App;