import DayList from './component/DayList';
import Header from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmptyPage from './component/Emptypage';
import CreateWord from './component/CreateWord';
import CreateDay from './component/CreateDay';

function App() {
  //함수형 컴포넌트
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<DayList />}></Route>
          <Route path='/day/:day' element={<Day />}></Route>
          <Route path='/create_word' element={<CreateWord />}></Route>
          <Route path='/create_day' element={<CreateDay />}></Route>
          <Route path='/*' element={<EmptyPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
