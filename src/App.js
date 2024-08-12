// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import Update from './Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Update />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
