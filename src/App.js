import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { userData } from './components/context/usercontext';
import { useContext, useState } from 'react';
import LandingPage from './components/LandingPage';
function App() {
  const [currentUser , setcurrentUser] = useState(null);
  console.log(currentUser)
  console.log(localStorage)

  const ProtectedRoute = ({ children }) => {
    if (currentUser === null) {
      console.log('navigation to login page');
      return (<Navigate to="/signin"></Navigate>)
    }
    return children
  }


  return (
    <div className="overflow-x-hidden">
      <userData.Provider value={{ currentUser, setcurrentUser }}>
        <Router>
          <Routes>
            <Route path='/' element={<ProtectedRoute> <LandingPage></LandingPage> </ProtectedRoute>} />
            <Route exact path="/signin" element={<SignIn></SignIn>} />
            <Route exact path="/signup" element={<SignUp ></SignUp>} />
          </Routes>
        </Router>
      </userData.Provider>
    </div>
  );
}

export default App;
