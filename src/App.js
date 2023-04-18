
import './App.css';
import Single from './Components/Single/Single';
import Write from './Pages/Write/Write';
import Navbar from './Components/Navbar/Navbar';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import HomePage from './Pages/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom"

function App() {
  const user = false;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<HomePage />}>

          </Route>
          <Route path='/register' element={user? <HomePage/> : <Register />}>

          </Route>
          <Route path='/login' element={user? <HomePage/> : <Login />}>

          </Route>
          <Route path='/posts' element={<HomePage />}>

          </Route>
          <Route path='/settings' element={user? <Settings />: <Login/>}>

          </Route>
          <Route path='/write' element={user? <Write /> : <Login/>}>

          </Route>
          <Route path='/post/:postId' element={<Single/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
