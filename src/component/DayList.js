import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function DayList() {
  const days = useFetch('http://localhost:3001/days');
  //   const [days, setDays] = useState([]);
  //   useEffect(() => {
  //     fetch('http://localhost:3001/days')
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setDays(data);
  //       });
  //   }, []); //빈배열을 주시하기에 최초 렌더링 될때 한번만 작동함, 뒤의 배열안의 내용이 변할때만 다시 렌더링하는 역할임
  if (days.length === 0) {
    return <span>Loading...</span>;
  }
  return (
    <ul className='list_day'>
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}>Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}
