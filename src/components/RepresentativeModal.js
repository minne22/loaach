import React, { useEffect } from 'react';

const RepresentativeModal = ({ name, onCancel, onConfirm, type = '대표' }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onCancel();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

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
        <p style={{ fontWeight: 'bold', marginBottom: '8px' }}>
          {type === '부계정' ? '부계정 대표 캐릭터로 등록하시겠습니까?' : '대표 캐릭터로 등록하시겠습니까?'}
        </p>
        <p>등록되는 계정 : <strong>{name}</strong></p>
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
          <button onClick={onCancel} style={{ padding: '8px 16px', background: '#ddd', borderRadius: '6px' }}>취소</button>
          <button onClick={onConfirm} style={{ padding: '8px 20px', background: '#555', color: '#fff', borderRadius: '6px' }}>등록하기</button>
        </div>
      </div>
    </div>
  );
};

export default RepresentativeModal;
