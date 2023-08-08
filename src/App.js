
import './App.css';
import AnimatedRoutes from './Components/animatedRoutes/AnimatedRoutes';
import VhiNavBar from './Components/vhi_navbar/VhiNavBar';
import ControlNavBar from './Components/vhi_navbar/controllNavbar/ControlNavBar';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {



  return (



    <Router>
      <ControlNavBar>
        <VhiNavBar />
      </ControlNavBar>
      <div className="App">
        <AnimatedRoutes />
      </div>
    </Router>




  );
}

export default App;
