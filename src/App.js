import {Route, BrowserRouter as Router, Switch} from "react-router-dom"
import Login from "./pages/Login"
import Error from "./pages/Error"
import NavBar from "./components/NavBar"
import "./App.scss"
import {useState} from "react"
import {CategoryContext} from "./common/CategoryContext"
import Dashboard from "./pages/Dashboard"
import Department from "./pages/Department"
import Doctor from "./pages/Doctor"
import Patient from "./pages/Patient"
import Nurse from "./pages/Nurse"
import Pharmacist from "./pages/Pharmacist"
import Laboratorist from "./pages/Laboratorist"
import Accountant from "./pages/Accountant"

const App = () => {
  const [user_category, setUserCategory] = useState("")
  return (
    <CategoryContext.Provider value={[user_category, setUserCategory]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/departments" component={Department} />
          <Route exact path="/doctors" component={Doctor} />
          <Route exact path="/patients" component={Patient} />
          <Route exact path="/nurses" component={Nurse} />
          <Route exact path="/pharmacists" component={Pharmacist} />
          <Route exact path="/laboratorists" component={Laboratorist} />
          <Route exact path="/accountants" component={Accountant} />
          <Route component={Error} />
        </Switch>
      </Router>
    </CategoryContext.Provider>
  )
}

export default App