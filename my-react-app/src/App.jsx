import React, { useState } from 'react';
import Button from './Pages/Button';
import StudentSignUp from './Pages/StudentSignUp';
import EmailVerification from './Pages/EmailVerification';
import SignIn from './Pages/SignIn';
import TutorOnboarding from './Pages/TutorOnboarding';
import AvailabilitySetup from './Pages/AvailabilitySetup';
import TutorDashboard from './Pages/TutorDashboard';
import MyClasses from './Pages/MyClasses';

export default function App() {
  const [page, setPage] = useState('role');

  const handleRoleSelect = (role) => {
    if (role === 'student') {
      setPage('signup');
    } else if (role === 'tutor') {
      setPage('onboarding');
    }
  };

  const handleVerificationDone = () => {
    alert('Verification Complete!');
    setPage('login');
  };

  return (
    <div>
      {page === 'role' && <Button onSelectRole={handleRoleSelect} />}
      
      {/* Student Flow */}
      {page === 'signup' && <StudentSignUp onSignUp={() => setPage('verify')} />}
      {page === 'verify' && <EmailVerification onVerify={handleVerificationDone} />}
      
      {/* Common Login */}
      {page === 'login' && (
        <SignIn 
          onSignUpClick={() => setPage('signup')} 
          onLogin={() => setPage('dashboard')} 
        />
      )}

      {/* Tutor Onboarding Flow */}
      {page === 'onboarding' && (
        <TutorOnboarding 
          onBack={() => setPage('role')} 
          onNext={() => setPage('availability')} 
        />
      )}
      {page === 'availability' && (
        <AvailabilitySetup 
          onBack={() => setPage('onboarding')} 
          onNext={() => setPage('dashboard')} 
        />
      )}

      {/* Tutor Views */}
      {page === 'dashboard' && (
        <TutorDashboard 
          onNavigate={(targetPage) => setPage(targetPage)} 
          onLogout={() => setPage('role')} 
        />
      )}
      {page === 'classes' && (
        <MyClasses 
          onNavigate={(targetPage) => setPage(targetPage)} 
          onLogout={() => setPage('role')} 
        />
      )}
    </div>
  );
}