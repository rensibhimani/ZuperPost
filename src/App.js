import './components/css/style.css';
import './components/css/responsive.css';
import './components/css/slick.css';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Platform from './components/Platform';
import Days from './components/Days';
import Future from './components/Future';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plateform' element={<Platform/>}/>
          <Route path='/feature' element={<Future/>}/>
          <Route path='/post' element={<Days/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
