import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/Home/page';
import ContactUs from '../pages/ContactUs/page';
const AppRoutes = () => {
  return (
    <Routes>    
        <Route path="/" element={<HomePage />} />
        <Route path="/contactus" element={<ContactUs />} />
    </Routes>
)
}
export default AppRoutes;