import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import Create from './components/CreateCollection/Create'
import './App.css';
import Wallet from './components/Wallet/Wallet'


function App() {
  return (
    <div className="App">
    <Wallet>
     <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="create" element={<Create/>} />
        </Routes>
     </BrowserRouter>
     </Wallet>
    </div>
  );
}

export default App;
