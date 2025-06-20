// src/components/settings/SettingsSidebarContent.js

import React from 'react';

const menuItems = [
  '프로필 설정',
  '대표 캐릭터 설정',
  '부계정 관리',
  '자동 갱신 설정',
  '계정 관리',
];

const SettingsSidebarContent = ({ selected, setSelected }) => {
  return (
    <div>
      {menuItems.map((item) => (
        <div
          key={item}
          onClick={() => setSelected(item)}
          style={{
            padding: '12px 14px',
            cursor: 'pointer',
            color: selected === item ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
            fontWeight: selected === item ? 'bold' : 'normal',
            backgroundColor: 'transparent',
            borderRadius: '0',
            marginBottom: '12px'
          }}
        >
          {item}
        </div>
      ))}
      <div style={{ marginTop: '20px', color: '#ce91ff', fontSize: '14px', cursor: 'pointer' }}>
        회원 탈퇴
      </div>
    </div>
  );
};

export default SettingsSidebarContent;
