import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom'; // 주소창에 들어오는 변수를 사용하기 위해서
import Word from './Word';
import useFetch from '../hooks/useFetch';

export default function Day() {
  const days = useFetch('http://localhost:3001/days');
  const day = parseInt(useParams().day);
  // const  wordList = dummy.words.filter(word => (word.day === day))
  const words = useFetch(`http://localhost:3001/words?day=${day}`);
  const navigate = useNavigate();

  function nextPage() {
    navigate(`/day/${day + 1}`);
  }

  function prevPage() {
    navigate(`/day/${day - 1}`);
  }

  //   useEffect(() => {
  //     fetch(`http://localhost:3001/words?day=${day}`)
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setWords(data);
  //       });
  //   }, [day]);

  return (
    <>
      <h2 className='pageBtnH2'>
        <button
          id='pageBtn1'
          style={{
            opacity: day === 1 ? 0.3 : 1,
          }}
          onClick={prevPage}
          disabled={day === 1 ? true : false}
        >
          ←
        </button>
        Day{day}{' '}
        <button
          id='pageBtn2'
          onClick={nextPage}
          style={{
            opacity: day === days.length ? 0.3 : 1,
          }}
          disabled={day === days.length ? true : false}
        >
          →
        </button>
      </h2>
      {words.length === 0 && <span>Loading...</span>}
      <table>
        <tbody>
          {words.map((word) => (
            <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}
