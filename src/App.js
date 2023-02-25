import logo from './logo.svg';
import './App.css';
import HeaderToolbar from './components/header/HeaderToolbar';
import BodyContent from './components/body/BodyContent';
import Commercial from './components/body/Commercial';


function App() {
  return (
    <div className="App">
      <HeaderToolbar/>
      <BodyContent/>
    </div>
  );
}

export default App;
