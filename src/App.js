import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import FormLogin from './components/form/FormLogin';
import FormRegister from './components/form/FormRegister';
import Product from './components/body/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<HomePage/>}/> 
        <Route path='/login' element={<FormLogin/>} /> 
        <Route path='/register' element={<FormRegister/>} /> 
        <Route path='/product' element={<Product/>} /> 
      </Routes>
    </div>
  );
}

export default App;
