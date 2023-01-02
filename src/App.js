import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Aside from './components/Aside';
import Footer from './components/Footer';

import RoutesApp from './routes';

import UserProvider from './contents/user';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';


function App() {
  return (
    <UserProvider>
      <div className="grid">

        <BrowserRouter>
          <Aside />
          <NavBar />
          <div className="main">
            <ToastContainer autoClose={2500} theme="colored" />
            <RoutesApp />
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
