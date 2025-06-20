import React from 'react';
import myImage from '../../assets/my_image.png';

const MainSidebarContent = () => {
  return (
    <>
      <div style={{ fontSize: '1em', fontWeight: '600', textAlign: 'center', color: '#b68fff', marginBottom: '20px', height: '20px' }}>
        첫째미네키우기
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '40px' }}>
        <img src={myImage} alt="프로필" style={{ width: '60%', borderRadius: '8px', objectFit: 'contain' }} />
      </div>

      {/* 업적 정보 */}
      <div style={{ marginBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span>👑</span>
          <span style={{
            fontSize: '14px',
            fontWeight: 'bold',
            background: 'linear-gradient(to bottom, #f9da8a, #b97a1b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>업적</span>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '90px auto',
          rowGap: '8px',
          color: '#fff',
          fontSize: '13px'
        }}>
          <div style={{ fontWeight: 'bold' }}>전체 현황</div><div>300개 / 1800개</div>
          <div style={{ fontWeight: 'bold' }}>획득 경험치</div><div>1500점 / 45000점</div>
          <div style={{ fontWeight: 'bold' }}>전체 진행률</div><div>8.75%</div>
          <div style={{ gridColumn: '2 / 3' }}><progress value={8.75} max={100} style={{ width: '100%', height: '8px' }} /></div>
        </div>
      </div>

      {/* 칭호 */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
          <span>📜</span>
          <span style={{
            fontSize: '13px',
            fontWeight: 'bold',
            background: 'linear-gradient(to bottom, #f9da8a, #b97a1b)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>칭호</span>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '90px auto',
          rowGap: '8px',
          color: '#fff',
          fontSize: '13px'
        }}>
          <div style={{ fontWeight: 'bold' }}>현재 칭호</div><div>백문이 불여일견</div>
          <div style={{ fontWeight: 'bold' }}>칭호 진행률</div><div>45.00%</div>
          <div style={{ gridColumn: '2 / 3' }}><progress value={45} max={100} style={{ width: '100%', height: '8px' }} /></div>
        </div>
      </div>
    </>
  );
};

export default MainSidebarContent;
