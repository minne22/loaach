import React, { useEffect, useState } from 'react';

const SubAccountInputModal = ({ onCancel, onSearch }) => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const handleSearch = () => {
    if (!input.trim()) {
      setError('값을 입력해 주세요');
      setTimeout(() => setError(''), 2000);
    } else {
      onSearch(input);
    }
  };

  return (
    <div
      id="modal-bg"
      onClick={(e) => e.target.id === 'modal-bg' && onCancel()}
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 2000,
        display: 'flex', justifyContent: 'center', alignItems: 'center'
      }}
    >
      <div style={{ position: 'relative', background: '#fff', padding: '24px 32px', borderRadius: '12px', minWidth: '360px' }}>
        <button onClick={onCancel} style={{
          position: 'absolute', top: 10, right: 10, border: 'none',
          background: 'transparent', fontSize: '18px', cursor: 'pointer'
        }}>×</button>
        <h3>부계정 등록하기</h3>
        <p>부계정 대표 캐릭터 닉네임을 입력하세요.</p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            placeholder="닉네임을 입력해 주세요"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{ flex: 1, padding: '8px 12px', border: '1px solid #ccc', borderRadius: '6px' }}
          />
          <button onClick={handleSearch} style={{ padding: '8px 16px', background: '#555', color: '#fff', borderRadius: '6px' }}>
            검색하기
          </button>
        </div>
        {error && <p style={{ color: 'red', marginTop: '8px' }}>{error}</p>}
      </div>
    </div>
  );
};

export default SubAccountInputModal;