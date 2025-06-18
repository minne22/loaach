// src/components/settings/SettingsSidebar.js

import React from 'react';

const menuItems = [
    '내 프로필',
    '대표 캐릭터',
    '부계정 캐릭터 관리',
    '로스트아크 설정'
];

const SettingsSidebar = ({ activeMenu, setActiveMenu }) => {
  return (
    <aside style={{
      width: '200px',
      borderRight: '1px solid #ddd',
      padding: '20px',
    }}>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {menuItems.map((item) => (
          <li
            key={item}
            onClick={() => setActiveMenu(item)}
            style={{
              padding: '10px',
              cursor: 'pointer',
              fontWeight: activeMenu === item ? 'bold' : 'normal',
              color: activeMenu === item ? '#000' : '#888',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SettingsSidebar;
