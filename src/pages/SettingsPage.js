// src/pages/SettingsPage.js

import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClients';
import SidebarPlusContent from '../components/layout/SidebarPlusContent';
import SidebarUI from '../components/layout/SidebarUI';
import SettingsSidebarContent from '../components/settings/SettingsSidebar';

const SettingsPage = () => {
  const [selected, setSelected] = useState('프로필 설정');
  const [user, setUser] = useState(null);
  const [nickname, setNickname] = useState('');
  const [showSaved, setShowSaved] = useState('');
  const [savedOnce, setSavedOnce] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (!error) setUser(data.user);
    };
    fetchUser();
  }, []);

  const handleSaveNickname = () => {
    if (!nickname.trim()) {
      setShowSaved('닉네임을 입력해 주세요');
    } else {
      setShowSaved('저장 완료');
    }
    setSavedOnce(true);
    setTimeout(() => setShowSaved(''), 2000);
  };

  const getButtonColor = () => {
    if (!nickname.trim()) return '#ccc';
    if (savedOnce) return '#ccc';
    return '#5a68a8';
  };

  const renderContent = () => {
    if (selected === '프로필 설정') {
      return (
        <div style={{ padding: '40px 60px' }}>
          <h2 style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '25px' }}>프로필 설정</h2>
          <hr style={{ border: 'none', height: '1px', backgroundColor: '#ddd', marginBottom: '45px' }} />

          {/* 프로필 사진 */}
          <div style={{ marginBottom: '60px' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0px' }}>프로필 사진</p>
            <p style={{ marginTop: '5px', fontSize: '14px', color: '#666', marginBottom: '12px' }}>
              모두에게 보여질 프로필 이미지를 수정할 수 있습니다. (최대 1MB)
            </p>
            <div style={{
              width: '96px',
              height: '96px',
              borderRadius: '12px',
              overflow: 'hidden',
              backgroundColor: '#5865F2',
              border: '2px solid gray',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              {user && (
                <img
                  src={user.user_metadata?.avatar_url}
                  alt="프로필"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          </div>

          {/* 닉네임 */}
          <div>
            <p style={{ fontWeight: 'bold', marginBottom: '2px' }}>닉네임</p>
            <p style={{ marginTop: '5px', fontSize: '14px', color: '#666', marginBottom: '12px' }}>
              모두에게 표시될 닉네임을 변경할 수 있습니다.
            </p>
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <input
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                  setSavedOnce(false);
                }}
                placeholder="닉네임을 입력해 주세요"
                style={{
                  width: '420px',
                  padding: '10px 12px',
                  fontSize: '15px',
                  border: '2px solid #ccc',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff'
                }}
              />
              <button
                onClick={handleSaveNickname}
                style={{
                  padding: '11px 25px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: getButtonColor(),
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
              >
                저장
              </button>
            </div>
            {showSaved && (
              <div style={{ marginTop: '8px', paddingLeft: '12px' }}>
                <span style={{ color: showSaved === '닉네임을 입력해 주세요' ? 'red' : '#999' }}>
                  {showSaved}
                </span>
              </div>
            )}
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <SidebarPlusContent
      sidebarContent={<SettingsSidebarContent selected={selected} setSelected={setSelected} />}
      mainContent={renderContent()}
    />
  );
};

export default SettingsPage;
