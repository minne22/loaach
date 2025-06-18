// components/AchievementCard.js
import React from 'react';

const AchievementCard = ({ subcategory, achievements }) => {
  const filtered = achievements.filter(item => item.subcategory === subcategory);

  const total = filtered.length;
  const completed = filtered.filter(item => item.status === '달성 완료').length;
  const upcompleted = total - completed;

  const expByGrade = { 일반: 20, 고급: 30, 희귀: 50 };

  const maxExp = filtered.reduce((acc, cur) => acc + expByGrade[cur.grade], 0);
  const currentExp = filtered
    .filter(item => item.status === '달성 완료')
    .reduce((acc, cur) => acc + expByGrade[cur.grade], 0);

  return (
    <div style={{
      width: '250px',
      padding: '15px 20px',
      borderRadius: '10px',
      background: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      gap: '5px'
    }}>
      <div style={{ fontSize: '15px', fontWeight: 'bold' }}>{subcategory}</div>
      <div style={{ fontSize: '14px', color: 'green' }}>
        {currentExp}점 / {maxExp}점
      </div>
      <div style={{ fontSize: '14px', color: '#111' }}>
        총 업적 : {total}개
      </div>
      <div style={{ fontSize: '14px', color: 'dodgerblue' }}>
        달성 업적 : {completed}개
      </div>
      <div style={{ fontSize: '14px', color: 'crimson' }}>
        미달성 업적 : {upcompleted}개
      </div>
    </div>
  );
};

export default AchievementCard;