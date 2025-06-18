// src/pages/SettingsPage.js
import React, { useState } from 'react';
import SettingsSidebar from '../components/settings/SettingsSidebar';
import SettingsContent from '../components/settings/SettingsContent';

const SettingsPage = () => {
  const [activeMenu, setActiveMenu] = useState('대표 캐릭터 설정');

  return (
    <div style={{ display: 'flex', height: '100%', minHeight: 'calc(100vh - 60px)' }}>
      <SettingsSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <SettingsContent activeMenu={activeMenu} />
    </div>
  );
};

export default SettingsPage;