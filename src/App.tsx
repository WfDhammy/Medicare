import './App.css'
import {Routes, Route} from "react-router"
import Signup from './Pages/Auth/Signup';
import Login from './Pages/Auth/Login';
import HomePage from './Pages/HomePage';
import ResetPassword from './Pages/ResetPassword';
import VerifyCode from './Pages/VerifyCode';
import ForgotPassword from './Pages/ForgotPassword';
import SignupVerifyCode from './Pages/SignupVerifyCode';
import SignupPassword from './Pages/SignupPassword';
import ActivateAccount from '../src/Pages/ActivateAccount'
import PasswordReset from './Pages/PasswordReset';

function App() {

  return (
    <>
     <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path='/resetPassword' element={<ResetPassword />} />
      <Route path='/forgotPassword' element={<ForgotPassword />} />
      <Route path='/verifyCode' element={<VerifyCode />} />
      <Route path='/signupVerifyCode' element={<SignupVerifyCode />} />
      <Route path='/signupPassword' element={<SignupPassword />} />
      <Route path='/activateAccount' element={<ActivateAccount />} />
      <Route path='/passwordReset' element={<PasswordReset />}/>
     </Routes>

      

    
    </>
  )
}


export default App
