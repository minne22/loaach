// src/components/CategoryCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ icon, title, score, total, completed }) => {
  const uncompleted = total - completed;
  const navigate = useNavigate(); // ✅ 클릭 시 라우팅

  const handleClick = () => {
    navigate(`/category/${title}`); // 예: /category/모험
  };

  return (
    <div
      onClick={handleClick}
      style={{
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '10px',
        width: '200px',
        height: '180px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'center',
        cursor: 'pointer', // ✅ 마우스 커서 변경
        transition: 'transform 0.2s',
      }}
    >
      <h4 style={{ marginBottom: '4px' }}>{icon} {title}</h4>
      <div style={{ fontSize: '13px', color: '#333', marginBottom: '12px' }}>{score}점</div>
      <div style={{ fontSize: '13px', marginBottom: '4px' }}>총 업적: {total}개</div>
      <div style={{ fontSize: '13px', marginBottom: '4px' }}>달성 업적: {completed}개</div>
      <div style={{ fontSize: '13px', color: 'red' }}>미달성 업적: {uncompleted}개</div>
    </div>
  );
};

export default CategoryCard;