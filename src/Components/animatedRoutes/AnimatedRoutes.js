import React from 'react'

import { Route, Switch, useLocation } from 'react-router-dom';
import VhiHome from '../home/VhiHome';
import VhiSignup from '../vhi_signup/VhiSignup';
import VhiLogin from '../vhi_login/VhiLogin';
import VhiForgtn from '../vhi_login/vhi_forgottenpassword/VhiForgtn';
import VhiMainHome from '../vhi_mainhome/VhiMainHome';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import VhiOldCom from '../vhi-oldcomm/VhiOldCom';
import Faq from '../Pages/Faq';
import Vhi_NewReg from '../vhi_newregistration/Vhi_NewReg';
import Vhi_registration from '../vhi_registration/Vhi_registration';
import Private from '../oldPrivate/Private';
import AboutBasic from '../home/aboutbasic/AboutBasic';
import BasicFaq from '../home/basicFaq/BasicFaq';
import BasicContact from '../home/basicContact/BasicContact';
import { AnimatePresence } from "framer-motion"
import Verified from '../vhiverified/Verified';
import VhiRecieved from '../vhiRecieved/VhiRecieved';
function AnimatedRoutes() {

    const location = useLocation();


    return (
        <AnimatePresence>
            <Switch location={location} key={location.pathname}>
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
                <Route exact path='/verified'><Verified /></Route>
                <Route exact path='/recieved'><VhiRecieved /></Route>
            </Switch>
        </AnimatePresence>
    )
}

export default AnimatedRoutes