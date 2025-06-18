// src/components/LogoutModal.js
import React, { useEffect } from 'react';

const LogoutModal = ({ onConfirm, onCancel }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onCancel]);

  // 배경 클릭 시 모달 닫힘
  const handleBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      onCancel();
    }
  };

  return (
    <div
      id="modal-background"
      onClick={handleBackgroundClick}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 2000,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '30px 40px',
          borderRadius: '16px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
          textAlign: 'center',
          width: '320px',
          position: 'relative',
        }}
      >
        {/* X 닫기 버튼 */}
        <button
          onClick={onCancel}
          style={{
            position: 'absolute',
            top: '12px',
            right: '14px',
            background: 'transparent',
            border: 'none',
            fontSize: '18px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: '#aaa',
          }}
          aria-label="닫기"
        >
          ×
        </button>

        <div style={{
          fontSize: '16px',
          fontWeight: 'bold',
          marginBottom: '24px',
        }}>
          로그아웃 하시겠습니까?
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
          <button
            onClick={onConfirm}
            style={{
              padding: '10px 20px',
              backgroundColor: '#555',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              flex: 1,
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#444')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#555')}
          >
            예
          </button>
          <button
            onClick={onCancel}
            style={{
              padding: '10px 20px',
              backgroundColor: '#ddd',
              color: '#111',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 'bold',
              flex: 1,
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = '#ccc')}
            onMouseOut={(e) => (e.target.style.backgroundColor = '#ddd')}
          >
            아니오
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;