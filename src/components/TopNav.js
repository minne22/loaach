// src/components/TopNav.js

import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClients';

const TopNav = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const tabs = [
    { name: '홈', path: '/' },
    { name: '커뮤니티', path: '/community' },
    { name: '설정', path: '/settings' },
  ];

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error('세션 불러오기 실패:', error.message);
        return;
      }

      setUser(data.session?.user ?? null);
      console.log('✅ user metadata:', data.session?.user?.user_metadata);
    };

    getUser();

    // 로그인/로그아웃 상태 감지
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('🔄 auth state changed');
      setUser(session?.user ?? null);
      console.log('✅ user metadata (변경):', session?.user?.user_metadata);
    });

    // 언마운트 시 리스너 해제
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);


  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/login');
  };

  return (
    <nav style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 24px',
      borderBottom: '1px solid #eee',
      backgroundColor: '#fff',
      fontFamily: 'sans-serif'
    }}>
      {/* 왼쪽: 로고 + 탭 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          fontWeight: 'bold',
          fontSize: '18px',
          marginRight: '40px'
        }}>
          UPLOA.GG
        </div>

        {tabs.map((tab, i) => (
          <NavLink
            key={i}
            to={tab.path}
            style={({ isActive }) => ({
              marginRight: '24px',
              textDecoration: 'none',
              fontWeight: isActive ? 'bold' : 'normal',
              color: isActive ? '#000' : '#aaa',
              borderBottom: isActive ? '2px solid black' : '2px solid transparent',
              paddingBottom: '4px',
              transition: 'all 0.2s',
            })}
          >
            {tab.name}
          </NavLink>
        ))}
      </div>

      {/* 오른쪽: 로그인 / 프로필 */}
      <div>
        {!user ? (
          <button
            onClick={async () => {
              await supabase.auth.signInWithOAuth({
                provider: 'discord',
              });
            }}
            style={{
              background: '#5865F2', // Discord 브랜드 컬러
              color: 'white',
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Discord로 로그인
          </button>
        ) : (
          user.user_metadata?.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt="avatar"
              title="로그아웃"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                objectFit: 'cover',
                cursor: 'pointer'
              }}
              onClick={handleLogout}
            />
          ) : (
            <button onClick={handleLogout}>로그아웃</button>
          )
        )}        
      </div>
    </nav>
  );
};

export default TopNav;