import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Registerationform from './Registerationform';
import Signin from './Signin';
import Tools from './Tools';
import Home from './pages/home/Home';
import EditTools from './EditTools';
import Profile from './Profile';
import AddTools from './AddTools';
import ViewTools from './ViewTools';
import Page1 from './Page1';
import Profileform from './Profileform';

function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/registration' element={<Registerationform />} />
          <Route path='/Signin' element={<Signin />} />
          <Route path='/tools' element={<Tools />} />
          <Route path='/tools/edittools/:id' element={<EditTools />} />
     
          <Route path='/profile' element={<Profile />} />
          <Route path='/addtools' element={<AddTools />} />
          <Route path='/viewtools' element={<ViewTools />} />
          <Route path='/page1' element={<Page1/>} />
          <Route path='/profileform' element={<Profileform/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
