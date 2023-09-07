//import logo from './logo.svg';
import {NavBar} from './components/navbar';
import { Signup } from './components/signup';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* components will go here */}
      <NavBar />
      <Signup />
    </div>
  );
}

export default App;
