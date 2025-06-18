// src/components/settings/SettingsContent.js
import React from 'react';

const SettingsContent = ({ activeMenu }) => {
  return (
    <div style={{ flex: 1, padding: '24px' }}>
      <h2>{activeMenu}</h2>
      <div style={{ marginTop: '12px' }}>
        {activeMenu === '내 프로필' && <p>프로필 변경 탭</p>}
        {activeMenu === '대표 캐릭터 설정' && <p>대표 캐릭터 설정 탭</p>}
        {activeMenu === '부계정 관리' && <p>부계정 정보 관리 탭</p>}
        {activeMenu === '로스트아크 설정' && <p>API 키 입력 등 로스트아크 설정 탭</p>}
      </div>
    </div>
  );
};

export default SettingsContent;