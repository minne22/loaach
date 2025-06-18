// src/components/Dashboard.js

import React from 'react';
import CategoryCard from './CategoryCard';

const categories = [
  { title: '위업', score: 0, total: 27, completed: 2 },
  { title: '모험', score: 0, total: 444, completed: 0 },
  { title: '캐릭터', score: 0, total: 0, completed: 0 },
  { title: '생활', score: 0, total: 0, completed: 0 },
  { title: '전투', score: 0, total: 0, completed: 0 },
  { title: '공격대', score: 0, total: 0, completed: 0 },
  { title: '항해', score: 0, total: 0, completed: 0 },
  { title: '원정대 영지', score: 0, total: 0, completed: 0 },
  { title: '히든', score: 0, total: 0, completed: 0 },
  { title: '유산', score: 0, total: 0, completed: 0 },
];


const Dashboard = () => {
  return (
    <div style={{
    flex: 1,
    background: '#fbfbfb',   // ✅ 연한 회색 카드 배경
    borderRadius: '12px',
    padding: '30px',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
    }}>
    <h3 style={{ marginBottom: '15px', color: '#111' }}>⬛ 업적별 현황</h3>
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px'
    }}>
        {categories.map((cat, i) => (
        <CategoryCard key={i} {...cat} />
        ))}
    </div>
    </div>
  );
};

export default Dashboard;