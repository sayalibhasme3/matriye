import './App.css';
import Maincontainer from './Components/Pages/Maincontainer';
import Sidebar from './Components/Sidebar';
import Profile from './Components/Pages/ProfilePages/Profile';
import Error from './Components/Pages/Error';
import {Routes, Route} from "react-router-dom"
import { profiledata } from './Utils/Data';

function App() {
  return (
    <div className="homecontainer">
      <Sidebar/>
      <Routes>
        <Route exact path='/' element={<Maincontainer/>}/>
        <Route exact  path='profile'  element={<Profile profiledetails={profiledata.Candidate1[0]}/>}/>
        <Route exact  path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
