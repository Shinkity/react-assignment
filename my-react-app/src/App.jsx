import React, { useState } from 'react';
import Button from './Pages/Button';
import StudentSignUp from './Pages/StudentSignUp';
import EmailVerification from './Pages/EmailVerification';
import SignIn from './Pages/SignIn';

export default function App() {
  const [page, setPage] = useState('role'); // 'role', 'signup', 'verify', or 'login'

  const handleVerificationDone = () => {
    alert('Verification Complete!');
    setPage('login'); // Redirects to Login page after clicking OK on alert
  };

  return (
    <div>
      {page === 'role' && <Button onContinue={() => setPage('signup')} />}
      {page === 'signup' && <StudentSignUp onSignUp={() => setPage('verify')} />}
      {page === 'verify' && <EmailVerification onVerify={handleVerificationDone} />}
      {page === 'login' && <SignIn onSignUpClick={() => setPage('signup')} />}
    </div>
  );
}