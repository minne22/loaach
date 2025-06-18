// src/pages/SubcategoryPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SubcategoryPage = () => {
  const { name, sub } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ padding: '40px' }}>
      <h2>{sub} 업적 보기</h2>
      <p>이 페이지에서 업적 리스트를 확인할 수 있습니다.</p>
      <button
        onClick={() => navigate(`/category/${name}/${sub}/list`)}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          background: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer'
        }}
      >
        업적 리스트 보기
      </button>
    </div>
  );
};

export default SubcategoryPage;
