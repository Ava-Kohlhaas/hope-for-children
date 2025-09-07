import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/page';

const AppRoutes = () => {
  return (
    <Routes>    
        <Route path="/" element={<HomePage />} />
    </Routes>
)
}
export default AppRoutes;