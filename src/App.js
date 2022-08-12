import Main from './components/Main';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';
import Tracker from './components/Tracker';
import ExerciseCalendar from './components/Calendar';
import SignIn from './components/Sigin'
import Profile from './components/Profile';
import UpdateProfile from './components/UpdateProfile';
import ForgotPassword from './components/ForgotPassword';
import "bootstrap/dist/css/bootstrap.min.css";
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider, useAuth } from './context/AuthContext';


function App() {
  const {loading, user} = useAuth()
 return (
   <>  
     <BrowserRouter>
     <AuthProvider>
     <Routes>
       <Route path="/" element={
        <PrivateRoute>
       <Main />
       </PrivateRoute>
       }></Route>
       <Route path="/profile" element={
        <PrivateRoute>
       <Profile />
       </PrivateRoute>
       } ></Route>
        <Route path="/update-profile" element={
        <PrivateRoute>
       <UpdateProfile />
       </PrivateRoute>
       } ></Route>
       <Route path="/signup" element={<SignUp/>} />
       <Route path="/signin" element={<SignIn/>} />
       <Route path="/calendar" element={
        <PrivateRoute>
       <ExerciseCalendar />
       </PrivateRoute>
       } ></Route>
       <Route path="/forgot-password" element={<ForgotPassword />}>
       </Route>
       <Route path="/tracker" element={
        <PrivateRoute>
       <Tracker />
       </PrivateRoute>
       }></Route>
     </Routes>
     </AuthProvider>
     </BrowserRouter>

     </>
   );
 
}

export default App;
