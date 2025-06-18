// pages/ListPage.js
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const expByGrade = { 일반: 20, 고급: 30, 희귀: 50 };

const ListPage = ({ data }) => {
  const { name, sub } = useParams();

  const filtered = data.filter(item => item.category === name && item.subcategory === sub);

  const toggleChecklist = (index, i) => {
    const updated = [...filtered];
    updated[index].checklist[i].checked = !updated[index].checklist[i].checked;
    updated[index].status = getStatus(updated[index].checklist);
    setAchievements([...updated]);
  };

  const getStatus = (checklist) => {
    const total = checklist.length;
    const checked = checklist.filter(c => c.checked).length;
    if (checked === 0) return '미달성';
    else if (checked < total) return '진행중';
    else return '달성 완료';
  };

  const [achievements, setAchievements] = useState(filtered.map(item => ({
    ...item,
    status: getStatus(item.checklist)
  })));

  return (
    <div style={{ padding: '30px' }}>
      <h2>{name} / {sub} - 업적 목록</h2>
      {achievements.map((item, index) => (
        <div key={index} style={{
          marginBottom: '20px',
          padding: '20px',
          background: '#f7f7f7',
          borderRadius: '10px'
        }}>
          <h3>{item.name}</h3>
          <p><strong>상태:</strong> {item.status}</p>

          <ul>
            {item.checklist.map((cond, i) => (
              <li key={i}>
                <input
                  type="checkbox"
                  checked={cond.checked}
                  onChange={() => toggleChecklist(index, i)}
                />
                {cond.text}
              </li>
            ))}
          </ul>

          <p>보상: {item.rewardCategory} - {item.rewardDetail}</p>
          <p>등급: {item.grade} ({expByGrade[item.grade]}점)</p>
        </div>
      ))}
    </div>
  );
};

export default ListPage;