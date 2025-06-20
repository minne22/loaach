// src/components/layout/SidebarUI.js

import React from 'react';
import kadanBg from '../../assets/kadan.jpg';

const SidebarUI = ({ children }) => {
  return (
    <div style={{
      width: '320px',
      height: '100vh',
      backgroundImage: `url(${kadanBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '50px 40px 40px 40px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexShrink: 0
    }}>
      <div>{children}</div>
      <div style={{
        marginTop: '40px',
        textAlign: 'center',
        fontSize: '12px',
        color: 'gray'
      }}>
        © Smilegate RPG
      </div>
    </div>
  );
};

export default SidebarUI;
