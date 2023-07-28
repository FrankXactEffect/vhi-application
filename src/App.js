
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VhiNavBar from './Components/vhi_navbar/VhiNavBar';
import ControlNavBar from './Components/vhi_navbar/controllNavbar/ControlNavBar';
import VhiHome from './Components/home/VhiHome';
import VhiSignup from './Components/vhi_signup/VhiSignup';
import VhiLogin from './Components/vhi_login/VhiLogin';
import VhiForgtn from './Components/vhi_login/vhi_forgottenpassword/VhiForgtn';
import VhiMainHome from './Components/vhi_mainhome/VhiMainHome';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import VhiOldCom from './Components/vhi-oldcomm/VhiOldCom';
import Faq from './Components/Pages/Faq';
import Vhi_NewReg from './Components/vhi_newregistration/Vhi_NewReg';
import Vhi_registration from './Components/vhi_registration/Vhi_registration';
import Private from './Components/oldPrivate/Private';
import AboutBasic from './Components/home/aboutbasic/AboutBasic';
import BasicFaq from './Components/home/basicFaq/BasicFaq';
import BasicContact from './Components/home/basicContact/BasicContact';



function App() {
  return (
    <Router>
      <ControlNavBar>
        <VhiNavBar />
      </ControlNavBar>
      <div className="App">
        <Switch>
          <Route exact path='/'><VhiHome /></Route>
          <Route exact path='/VhiSignup'><VhiSignup /></Route>
          <Route exact path='/VhiLogin'><VhiLogin /></Route>
          <Route exact path='/VhipasswordRecovery'><VhiForgtn /></Route>
          <Route exact path='/VhiMainHome'><VhiMainHome /></Route>
          <Route exact path='/VhiAbout'><About /></Route>
          <Route exact path='/VhiContact'><Contact /></Route>
          <Route exact path='/OldCommercial'><VhiOldCom /></Route>
          <Route exact path='/VhiFQA'><Faq /></Route>
          <Route exact path='/reg'><Vhi_registration /></Route>
          <Route exact path='/newregistration'><Vhi_NewReg /></Route>
          <Route exact path='/oldprivate'><Private /></Route>
          <Route exact path='/basicAboutus'><AboutBasic /></Route>
          <Route exact path='/basicFaq'><BasicFaq /></Route>
          <Route exact path='/basicContact'><BasicContact /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
