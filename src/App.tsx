import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<div>Forgot Password Page</div>} />
      <Route path="/signup" element={<div>Sign Up Page</div>} />
      <Route path="*" element={<LoginPage />} /> {/* Default route */}
    </Routes>
  );
}

export default App;