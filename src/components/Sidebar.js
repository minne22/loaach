import React from 'react';
import kadanBg from '../assets/kadan.jpg';
import myImage from '../assets/my_image.png';

const Sidebar = () => {
  return (
    <div style={{
      width: '400px',
      height: '100vh',
      backgroundImage: `url(${kadanBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '80px 80px 40px 80px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    }}>
      {/* 상단 내용 */}
      <div>
        {/* 닉네임 */}
        <div style={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#b68fff',
          marginBottom: '20px',
          height: '20px'
        }}>
          첫째미네키우기
        </div>

        {/* 프로필 */}
        <div style={{
          width: '240px',
          height: '240px',
          backgroundColor: '#eee',
          marginBottom: '40px'
        }}>
          <img
            src={myImage}
            alt="프로필"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* 업적 블럭 */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '18px'
          }}>
            <span style={{ fontSize: '14px' }}>👑</span>
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
            gridTemplateColumns: '110px auto',
            rowGap: '10px',
            color: '#fff',
            fontSize: '14px',
            marginBottom: '10px'
          }}>
            <div style={{ fontWeight: 'bold' }}>전체 현황</div>
            <div>300개 / 1800개</div>
            <div style={{ fontWeight: 'bold' }}>획득 경험치</div>
            <div>1500점</div>
            <div style={{ fontWeight: 'bold' }}>전체 진행률</div>
            <div>8.75%</div>
          </div>

          <progress value={8.75} max={100} style={{ width: '100%', height: '8px' }} />
        </div>

        {/* 칭호 블럭 */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '18px'
          }}>
            <span style={{ fontSize: '14px' }}>📜</span>
            <span style={{
              fontSize: '14px',
              fontWeight: 'bold',
              background: 'linear-gradient(to bottom, #f9da8a, #b97a1b)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>칭호</span>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '110px auto',
            rowGap: '10px',
            color: '#fff',
            fontSize: '14px',
            marginBottom: '10px'
          }}>
            <div style={{ fontWeight: 'bold' }}>현재 칭호</div>
            <div>백문이 불여일견</div>
            <div style={{ fontWeight: 'bold' }}>칭호 진행률</div>
            <div>45.00%</div>
          </div>

          <progress value={45.00} max={100} style={{ width: '100%', height: '8px' }} />
        </div>
      </div>

      {/* 하단 저작권 */}
      <div style={{
        marginTop: '40px',
        textAlign: 'center',
        fontSize: '12px',
        color: '#ccc'
      }}>
        © Smilegate RPG
      </div>
    </div>
  );
};

export default Sidebar;
