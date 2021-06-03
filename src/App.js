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

const App = () => {
  const [user_category, setUserCategory] = useState("")
  return (
    <CategoryContext.Provider value={[user_category, setUserCategory]}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/departments" component={Department} />
          <Route exact path="/doctors" component={Doctor} />
          <Route component={Error} />
        </Switch>
      </Router>
    </CategoryContext.Provider>
  )
}

export default App