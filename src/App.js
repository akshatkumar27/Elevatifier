import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Transaction from './pages/Transaction';
import Post from './pages/Post';

function App() {
  return (
    <div >
     <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/transaction' element={<Transaction/>}/>
      <Route  path='/post' element={<Post/>}/>
     </Routes>
    </div>
  );
}

export default App;
