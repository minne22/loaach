import React from 'react';
import { useNavigate } from 'react-router-dom';
import trophyIcon from '../assets/icon_trophy.png';

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
  const navigate = useNavigate();

  const handleClick = (title) => {
    navigate(`/category/${title}`);
  };

  return (
    <div
      style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: '30px 80px 40px 80px',
        boxSizing: 'border-box',
      }}
    >
      <h3 style={{ marginBottom: '30px', color: '#111', fontWeight: '700', fontSize: '1.0em' }}>
        업적별 현황
      </h3>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: '40px',
        }}
      >
        {categories.map((cat, i) => (
          <div
            key={i}
            onClick={() => handleClick(cat.title)}
            style={{
              background: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
              padding: '30px 20px',
              textAlign: 'center',
              height: '260px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-start',
              fontSize: '14px',
              color: '#222',
              cursor: 'pointer',
              transition: 'transform 0.2s',
            }}
          >
            <img
              src={trophyIcon}
              alt="icon"
              style={{ width: '80px', height: '80px', margin: '0 auto 30px' }}
            />
            <div style={{ fontFamily: 'DNFForgedBlade', fontSize: '28px', fontWeight: '580', marginBottom: '8px' }}>
              {cat.title}
            </div>
            <div style={{ marginBottom: '4px' }}>{cat.score}점</div>
            <div style={{ marginBottom: '4px' }}>총 업적: {cat.total}개</div>
            <div style={{ marginBottom: '4px' }}>달성 업적: {cat.completed}개</div>
            <div style={{ marginTop: '4px', color: 'red', fontWeight: '500' }}>
              미달성 업적: {cat.total - cat.completed}개
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
