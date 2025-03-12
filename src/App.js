import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Comics from './pages/Comics';
import Home from './pages/Home';
import Error404 from './pages/Error404';
import Series from './pages/Series';
import Header from './components/Header'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/inicio' element={<Home />}/>
          <Route path='/series' element={<Series />}/>
          <Route path='/comics' element={<Comics />}/>
          <Route path='/*' element={<Error404 />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;