import React, { useState } from 'react';

const menuItems = [
  '프로필 설정',
  '대표 캐릭터 설정',
  '부계정 관리',
  '자동 갱신 설정',
  '계정 관리',
];

const SettingsPage = () => {
  const [selected, setSelected] = useState('프로필 설정');

  const renderContent = () => {
    switch (selected) {
      case '프로필 설정':
        return (
          <div>
            <h2>프로필 설정</h2>
            <p>프로필 사진</p>
            <p>모두에게 보여지는 프로필 이미지를 등록하세요. (최대 1MB)</p>
            <div style={{
              width: '120px',
              height: '120px',
              border: '4px solid #ccc',
              borderRadius: '16px',
              backgroundColor: '#fff'
            }} />
            <p style={{ marginTop: '24px' }}>닉네임</p>
            <p>모두에게 보여지는 닉네임을 등록하세요.</p>
            <input placeholder="닉네임을 입력해 주세요" style={{ width: '400px', padding: '10px' }} />
            <br /><br />
            <button>저장</button>
          </div>
        );
      case '대표 캐릭터 설정':
        return (
          <div>
            <h2>대표 캐릭터 설정</h2>
            <p>대표 캐릭터 닉네임</p>
            <p>로스트아크 내의 대표 캐릭터 닉네임을 입력하세요. 원정대를 불러올 수 있습니다.</p>
            <input placeholder="닉네임을 입력해 주세요" style={{ width: '400px', padding: '10px' }} />
            <button style={{ marginLeft: '8px' }}>검색하기</button>
            <br /><br />
            <button>저장</button>
          </div>
        );
      case '부계정 관리':
        return (
          <div>
            <h2>부계정 관리</h2>
            <button>추가하기 +</button>
          </div>
        );
      case '자동 갱신 설정':
        return (
          <div>
            <h2>자동 갱신 설정</h2>
            <p>API Key</p>
            <input placeholder="발급받은 API를 입력하세요." style={{ width: '400px', padding: '10px' }} />
            <p><a href="#">API Key 발급 가이드</a></p>
            <br />
            <button>저장</button>
          </div>
        );
      case '계정 관리':
        return (
          <div>
            <h2>계정 관리</h2>
            <p>회원 탈퇴</p>
            <button>탈퇴하기</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '90vh',
      fontFamily: 'sans-serif'
    }}>
      {/* 좌측 메뉴 */}
      <div style={{
        width: '220px',
        background: '#f3f3f3',
        borderRadius: '24px',
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => setSelected(item)}
            style={{
              padding: '12px 10px',
              cursor: 'pointer',
              backgroundColor: selected === item ? '#999' : 'transparent',
              color: selected === item ? 'white' : 'black',
              borderRadius: '4px',
              marginBottom: '8px',
              fontWeight: selected === item ? 'bold' : 'normal'
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* 우측 내용 */}
      <div style={{
        flex: 1,
        padding: '40px',
        backgroundColor: '#f6f6f6',
        borderRadius: '24px',
        marginLeft: '24px'
      }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default SettingsPage;
