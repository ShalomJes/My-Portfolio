import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailSrvice from './component/DetailSrvice';
import Main from './component/Main';

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/detail' element={<DetailSrvice />}> </Route>
          <Route path='*' element={<Main />}> </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
