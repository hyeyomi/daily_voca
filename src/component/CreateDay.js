import { useRef } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigate } from 'react-router-dom';

export default function CreateDay() {
  const days = useFetch('http://localhost:3001/days');
  const navigate = useNavigate();
  function addDay(e) {
    fetch(`http://localhost:3001/days/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then((res) => {
      if (res.ok) {
        alert('생성이 완료되었습니다.');
        navigate('/');
      }
    });
  }

  function delDay(e) {
    if (window.confirm('삭제 하시겠습니까?')) {
      fetch(`http://localhost:3001/days/${days.length}`, {
        method: 'DELETE',
      }).then((res) => {
        if (res.ok) {
          navigate('/');
        }
      });
    }
  }

  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button id='creBtn' onClick={addDay}>
        Day 추가
      </button>
      <button id='delBtn' onClick={delDay}>
        Day 삭제
      </button>
    </div>
  );
}
