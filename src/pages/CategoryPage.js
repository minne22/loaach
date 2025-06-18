// src/pages/CategoryPage.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { categories } from '../data/categories';

const CategoryPage = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const category = categories.find(c => c.name === name);
  if (!category) return <p>카테고리를 찾을 수 없습니다.</p>;

  return (
    <div style={{ padding: '40px' }}>
      <h2>{category.name} 하위 카테고리</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
        {category.subcategories.map((sub, i) => (
          <div
            key={i}
            onClick={() => navigate(`/category/${name}/${sub}`)}
            style={{
              width: '200px',
              height: '100px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '12px',
              cursor: 'pointer',
              background: '#fff',
              boxShadow: '0 1px 4px rgba(0,0,0,0.05)'
            }}
          >
            <h4>{sub}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;