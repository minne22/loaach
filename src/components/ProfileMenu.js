// src/components/ProfileMenu.js
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClients';
import LogoutModal from './LogoutModal';

const ProfileMenu = ({ user }) => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setShowModal(false);
    setOpen(false);
    navigate('/');
  };

  return (
    <>
      <div ref={menuRef} style={{ position: 'relative' }}>
        <img
          src={user.user_metadata?.avatar_url}
          alt="avatar"
          style={{
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            objectFit: 'cover',
            cursor: 'pointer',
          }}
          onClick={() => setOpen(!open)}
        />

        {open && (
          <div style={{
            position: 'absolute',
            top: '110%',
            right: 0,
            background: '#fff',
            border: '1px solid #ccc',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            width: '180px',
            zIndex: 1000,
            fontSize: '14px',
            overflow: 'hidden',
          }}>
            {/* 미니 프로필 */}
            <div style={{ padding: '12px', borderBottom: '1px solid #eee' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <img
                  src={user.user_metadata?.avatar_url}
                  alt="avatar"
                  style={{ width: 32, height: 32, borderRadius: '50%' }}
                />
                <span style={{ fontWeight: 'bold' }}>
                  {user.user_metadata?.full_name ?? '유저'}
                </span>
              </div>
            </div>

            {/* 설정 */}
            <div
              style={{ padding: '10px 14px', cursor: 'pointer', borderBottom: '1px solid #eee' }}
              onClick={() => {
                navigate('/settings');
                setOpen(false);
              }}
            >
              설정
            </div>

            {/* 로그아웃 클릭 → 모달 표시 */}
            <div
              style={{ padding: '10px 14px', cursor: 'pointer', color: 'red' }}
              onClick={() => {
                setShowModal(true);
              }}
            >
              로그아웃
            </div>
          </div>
        )}
      </div>

      {/* 로그아웃 모달 */}
      {showModal && (
        <LogoutModal
          onConfirm={handleLogout}
          onCancel={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default ProfileMenu;
