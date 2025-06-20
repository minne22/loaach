// src/components/layout/SidebarPlusContent.js

import React from 'react';
import SidebarUI from './SidebarUI';

const SidebarPlusContent = ({ sidebarContent, mainContent }) => {
  return (
    <div
      style={{
        display: 'flex',
        height: 'calc(100vh - 70px)', // ✅ TopNav 높이(예: 60px)를 제외한 높이
        overflow: 'hidden',
      }}
    >
      {/* 고정된 왼쪽 사이드바 */}
      <SidebarUI>
        {sidebarContent}
      </SidebarUI>

      {/* 오른쪽 콘텐츠만 스크롤 */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          backgroundColor: '#fff',
        }}
      >
        {mainContent}
      </div>
    </div>
  );
};

export default SidebarPlusContent;
