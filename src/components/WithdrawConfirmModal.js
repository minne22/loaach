import React, { useEffect } from 'react';

const WithdrawConfirmModal = ({ onCancel, onConfirm }) => {
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
      <div style={{ position: 'relative', background: '#f9f9f9', padding: '30px 40px', borderRadius: '12px', minWidth: '360px' }}>
        <button onClick={onCancel} style={{
          position: 'absolute', top: 10, right: 10, border: 'none',
          background: 'transparent', fontSize: '18px', cursor: 'pointer'
        }}>×</button>
        <p style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '16px' }}>
          정말로 탈퇴 하시겠습니까?
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button
            onClick={onConfirm}
            style={{
              padding: '10px 18px',
              background: '#555',
              color: 'white',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            예를 눌러<br />개발자를 울리기
          </button>
          <button
            onClick={onCancel}
            style={{
              padding: '10px 18px',
              background: '#555',
              color: 'white',
              borderRadius: '6px',
              fontWeight: 'bold'
            }}
          >
            아니오를 눌러<br />개발자를 웃게 하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawConfirmModal;
