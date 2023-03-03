import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import FormLogin from './components/form/FormLogin';
import FormRegister from './components/form/FormRegister';
import Product from './components/body/Product';
import Controls from './components/AdminControl/Controls';
import EditUser from './components/AdminControl/EditUser';
import EditItem from './components/AdminControl/EditItem';
import AddProduct from './components/AdminControl/AddProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<HomePage/>}/> 
        <Route path='/login' element={<FormLogin/>} /> 
        <Route path='/register' element={<FormRegister/>} /> 
        <Route path='/product' element={<Product/>} /> 
        <Route path='/controls' element={<Controls/>} /> 
        <Route path='/controls/edit' element={<EditUser/>} /> 
        <Route path='/controls/editItem' element={<EditItem/>} /> 
        <Route path='/controls/addItems' element={<AddProduct/>} /> 
      </Routes>
    </div>
  );
}

export default App;
