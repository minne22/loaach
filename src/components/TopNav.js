// src/components/TopNav.js
import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabaseClients';
import ProfileMenu from './ProfileMenu';

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '16px 24px',
        borderBottom: '1px solid #eee',
        backgroundColor: '#fff',
        fontFamily: 'sans-serif',
      }}
    >
      {/* 왼쪽: 로고 + 탭 */}
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div
          style={{
            fontWeight: 'bold',
            fontSize: '18px',
            marginRight: '40px',
          }}
        >
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

      {/* 오른쪽: 로그인 / 프로필 메뉴 */}
      <div>
        {!user ? (
          <button
            onClick={async () => {
              await supabase.auth.signInWithOAuth({ provider: 'discord' });
            }}
            style={{
              background: '#5865F2',
              color: 'white',
              padding: '6px 14px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Discord로 로그인
          </button>
        ) : (
          <ProfileMenu user={user} />
        )}
      </div>
    </nav>
  );
};

export default TopNav;