import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClients';
import RepresentativeModal from '../components/RepresentativeModal';
import SubAccountInputModal from '../components/SubAccountInputModal';
import WithdrawConfirmModal from '../components/WithdrawConfirmModal';

const menuItems = [
  '프로필 설정',
  '대표 캐릭터 설정',
  '부계정 관리',
  '자동 갱신 설정',
  '계정 관리',
];

const SettingsPage = () => {
  const [selected, setSelected] = useState('프로필 설정');
  const [user, setUser] = useState(null);

  const [nickname, setNickname] = useState('');
  const [showSaved, setShowSaved] = useState('');
  const [repName, setRepName] = useState('');
  const [repConfirmedName, setRepConfirmedName] = useState('');
  const [repError, setRepError] = useState('');
  const [showRepModal, setShowRepModal] = useState(false);

  const [showSubModal, setShowSubModal] = useState(false);
  const [subToRegister, setSubToRegister] = useState(null);
  const [subAccounts, setSubAccounts] = useState([]);

  const [apiKey, setApiKey] = useState('');
  const [showApiSaved, setShowApiSaved] = useState('');

  const [showWithdraw, setShowWithdraw] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) return;
      setUser(data.user);
    };
    fetchUser();
  }, []);

  const handleSaveNickname = () => {
    if (!nickname.trim()) {
      setShowSaved('닉네임을 입력해 주세요');
    } else {
      setShowSaved('저장 완료');
    }
    setTimeout(() => setShowSaved(''), 2000);
  };

  const handleSaveApi = () => {
    if (!apiKey.trim()) {
      setShowApiSaved('API를 입력해 주세요');
    } else {
      setShowApiSaved('저장 완료');
    }
    setTimeout(() => setShowApiSaved(''), 2000);
  };

  const renderContent = () => {
    switch (selected) {
      case '프로필 설정':
        return (
          <div>
            <h2>프로필 설정</h2>
            <p>프로필 사진</p>
            <div style={{ width: '120px', height: '120px', border: '4px solid #ccc', borderRadius: '16px', overflow: 'hidden' }}>
              {user && <img src={user.user_metadata?.avatar_url} alt="프로필" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
            </div>
            <p style={{ marginTop: '24px' }}>닉네임</p>
            <input value={nickname} onChange={(e) => setNickname(e.target.value)} placeholder="닉네임을 입력해 주세요" style={{ width: '400px', padding: '10px' }} />
            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={handleSaveNickname}>저장</button>
              {showSaved && <span style={{ color: showSaved === '닉네임을 입력해 주세요' ? 'red' : '#999' }}>{showSaved}</span>}
            </div>
          </div>
        );

      case '대표 캐릭터 설정': {
        const isRepRegistered = repConfirmedName === repName;
        return (
          <div>
            <h2>대표 캐릭터 설정</h2>
            <p>대표 캐릭터 닉네임을 입력하세요.</p>
            <input
              value={repName}
              onChange={(e) => {
                setRepName(e.target.value);
                setRepError('');
              }}
              style={{ width: '400px', padding: '10px' }}
            />
            <button
              onClick={() => {
                if (!repName.trim()) {
                  setRepError('닉네임을 입력해 주세요');
                } else {
                  setShowRepModal(true);
                }
              }}
              disabled={isRepRegistered}
              style={{
                marginLeft: '8px',
                background: isRepRegistered ? '#ccc' : '#333',
                color: 'white',
                padding: '10px',
                borderRadius: '6px',
                cursor: isRepRegistered ? 'not-allowed' : 'pointer'
              }}
            >
              검색하기
            </button>
            {repError && <p style={{ color: 'red', marginTop: '8px' }}>{repError}</p>}
            {showRepModal && (
              <RepresentativeModal
                name={repName}
                onCancel={() => setShowRepModal(false)}
                onConfirm={() => {
                  setRepConfirmedName(repName);
                  setShowRepModal(false);
                }}
              />
            )}
          </div>
        );
      }

      case '부계정 관리':
        return (
          <div>
            <h2>부계정 관리</h2>
            <button onClick={() => setShowSubModal(true)}>추가하기 +</button>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {subAccounts.map((acc, i) => (
                <div key={i} style={{ background: '#ccc', padding: '6px 12px', borderRadius: '6px' }}>{acc}</div>
              ))}
            </div>
            {showSubModal && (
              <SubAccountInputModal
                onCancel={() => setShowSubModal(false)}
                onSearch={(val) => {
                  if (!val.trim()) {
                    setShowSaved('닉네임을 입력해 주세요');
                    setTimeout(() => setShowSaved(''), 2000);
                    return;
                  }
                  setSubToRegister(val);
                  setShowSubModal(false);
                }}
              />
            )}
            {subToRegister && (
              <RepresentativeModal
                name={subToRegister}
                type="부계정"
                onCancel={() => setSubToRegister(null)}
                onConfirm={() => {
                  setSubAccounts([...subAccounts, subToRegister]);
                  setSubToRegister(null);
                }}
              />
            )}
          </div>
        );

      case '자동 갱신 설정':
        return (
          <div>
            <h2>자동 갱신 설정</h2>
            <p>API Key</p>
            <input value={apiKey} onChange={(e) => setApiKey(e.target.value)} placeholder="API 키를 입력하세요" style={{ width: '400px', padding: '10px' }} />
            <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={handleSaveApi}>저장</button>
              {showApiSaved && <span style={{ color: showApiSaved === 'API를 입력해 주세요' ? 'red' : '#999' }}>{showApiSaved}</span>}
            </div>
          </div>
        );

      case '계정 관리':
        return (
          <div>
            <h2>계정 관리</h2>
            <p>회원 탈퇴</p>
            <button onClick={() => setShowWithdraw(true)}>탈퇴하기</button>
            {showWithdraw && (
              <WithdrawConfirmModal
                onCancel={() => setShowWithdraw(false)}
                onConfirm={() => {
                  setShowWithdraw(false);
                  alert('탈퇴 처리가 진행됩니다 (예시)');
                }}
              />
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '90vh', fontFamily: 'sans-serif' }}>
      <div style={{ width: '220px', background: '#f3f3f3', borderRadius: '24px', padding: '20px' }}>
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
      <div style={{ flex: 1, padding: '40px', backgroundColor: '#f6f6f6', borderRadius: '24px', marginLeft: '24px' }}>
        {renderContent()}
      </div>
    </div>
  );
};

export default SettingsPage;