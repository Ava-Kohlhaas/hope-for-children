import HFCLogo from './assets/hfc-logo.jpg'
import './App.css'
import NavigationBar from './components/NavigationBar';
import AppRoutes from './routes/routes';
import Footer from './components/Footer';

function App() {
  
  return (
    <div className='bg-amber-100'>
      <div>
        <NavigationBar />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  )
}

export default App
