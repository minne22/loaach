// src/components/Sidebar.js

import React from 'react';
import myImage from '../assets/my_image.png';

const Sidebar = () => {
  const dataRows = [
    ['현재 칭호', '백문이 불여일견'],
    ['업적 획득 경험치', '1500점'],
    ['업적 전체 현황', '300개 / 1800개'],
    ['현재 칭호 기준 진행률', (
      <>
        45.00%
        <progress value={45} max={100} style={{ width: '100%', marginTop: '4px' }} />
      </>
    )],
    ['전체 진행률', (
      <>
        8.75%
        <progress value={8.75} max={100} style={{ width: '100%', marginTop: '4px' }} />
      </>
    )],
  ];

  return (
    <div style={{
      width: '340px',
      background: '#fff', // ✅ 카드형 흰 배경
      padding: '25px 20px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxSizing: 'border-box'
    }}>
      <h3 style={{
        marginBottom: '10px',
        alignSelf: 'flex-start',
        fontWeight: '600',
        color: '#222'
      }}>⬛ 종합 정보</h3>

      <img
        src={myImage}
        alt="캐릭터"
        style={{ width: '160px', height: 'auto', marginBottom: '10px' }}
      />
      <h4 style={{ marginBottom: '20px' }}>첫째미네키우기</h4>

      <div style={{
        width: '100%',
        fontSize: '14px'
      }}>
        {dataRows.map(([label, value], i) => (
          <div key={i} style={{
            display: 'flex',
            borderTop: i === 0 ? 'none' : '1px solid #ddd',
            padding: '10px 0',
            alignItems: 'center',
            gap: '16px' // ✅ 라벨과 값 사이 간격 추가
          }}>
            <div style={{
              width: '130px',
              fontWeight: 'bold',
              color: '#333',
              whiteSpace: 'nowrap'
            }}>
              {label}
            </div>
            <div style={{ flex: 1 }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;