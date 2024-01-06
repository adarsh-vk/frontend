
import {BrowserRouter,Route,Routes} from "react-router-dom";
import './App.css';
import Userrouter from './Routes/Userrouter';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Userrouter/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
