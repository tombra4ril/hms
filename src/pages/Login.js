import {React, useState, useEffect} from 'react'
import "./styles/Login.scss"
import {axiosInstance, axiosTokenInstance, baseURL} from "../modules/AxiosTools"
import {useHistory, Link} from 'react-router-dom'
import {AccountType} from "../modules/AccountType"

const Login = () => {
  // Get the history
  const history = useHistory()

  // Set error message
  const [error_message, SetErrorMessage] = useState("")

  // As soon as components loads
  const initial_form_data = Object.freeze({
    category: "",
    email: "",
    password: ""
  })
  const [form_data, SetFormData] = useState(initial_form_data)

  // Category block code
  const category_end_point = baseURL + process.env.REACT_APP_category_end_point
  const [user_group, setUserGroup] = useState(null)
  useEffect(() => {
    // set document title
    document.title = "Hospital Managment System - Login"

    setUserGroup(AccountType)
    axiosInstance.get(category_end_point)
    .then(response => {
      setUserGroup(response.data)
      console.log(response.data)
    })
    .catch(error => {
      console.log(`Error fetching category: ${error.message}`)
    })
  }, [category_end_point])
  
  // Handle submit button and login
  const handleSubmit = (event) => {
    event.preventDefault()
    SetErrorMessage("")
    // Authenticate the user
    if(form_data["category"] === "" || form_data["email"] === "" || form_data["password"] === ""){
      SetErrorMessage("* Category or Email or password must be filled")
    }
    else{
      SetErrorMessage("")
      // const token_end_point = baseURL + process.env.REACT_APP_token_end_point
      const token_end_point = baseURL + process.env.REACT_APP_token_end_point
      axiosTokenInstance.post(token_end_point, {
        email: form_data.email,
        password: form_data.password,
        category: form_data.category
      })
      .then(response => {
        // Set token and refresh in localstorage
        localStorage.setItem("access_token", response.data.access)
        localStorage.setItem("refresh_token", response.data.refresh)
        localStorage.setItem("user_category", form_data["category"])
        console.log("Access and Refresh tokens set in local storage successfully!")
        // set default authorization header
        axiosTokenInstance.defaults.headers["Authorization"] = "JWT " + localStorage.getItem("access_token")
      })
      .then(() => {
        // Call the login api
        const login_end_point = baseURL + process.env.REACT_APP_login_end_point
        axiosTokenInstance.post(login_end_point, {
          email: form_data.email,
          password: form_data.password,
          category: form_data.category
        })
        .then(() => {
          console.log("Logged in successfully")
          history.push("/dashboard")
        })
        .catch(error => {
          if(error.response.status === 401){
            SetErrorMessage("* Wrong Category, Email, or Password!")
          }
        })
      })
      .catch(error => {
        if (error.response.status === 401) {
        } else {
          // Something happened in setting up the request and triggered an Error
          console.log('Error', error.message);
        }
      })
    }
  }

  const handleSelectChange = (event) => {
    SetFormData({
      ...form_data,
      "category": event.target.value.trim().toLowerCase()
    })
  }
  
  // Handle input form fields
  const handleChange = (event) => {
    SetFormData({
      ...form_data,
      [event.target.name]: event.target.value.trim().toLowerCase()
    })
  }

  // Handle showing and handling of passwords
  const password_hidden = "remove_red_eye"
  const password_show = "adjust"
  const [password, setPassword] = useState("password")
  const [eye, setEye] = useState(password_hidden)
  const showHidePassword = (event) => {
    if(password === "password"){
      setPassword("text")
      setEye(password_show)
    }else{
      setPassword("password")
      setEye(password_hidden)
    }
  }

  return (
    <div>
      <div className="login-div">
        <div className="login-icon-div">
          <div><span className="login-icon material-icons">person</span></div>
          <div className="login-text">Log In</div>
        </div>
        <div className="form-div">
          <form>
            <div className="error-div">
              <p>{error_message}</p>
            </div>
            <div className="select-div input-div">
              <select value={form_data["category"]} className="input-field" name="category" onChange={handleSelectChange}>
                <option value="" disabled>Select Category...</option>
                {
                  user_group? 
                  user_group.map((category, index) => 
                    <option key={index.toString()} value={category.name.toString().toLowerCase()}>{category.name.toString().toUpperCase()}</option>
                  ):
                  "" 
                }
              </select>
            </div>
            <div className="email-div input-div">
              <span className="material-icons">email</span>
              <input name="email" type="text" className="input-field icon-input" onChange={handleChange}/>
            </div>
            <div className="password-div input-div">
              <span className="material-icons">vpn_key</span>
              <input name="password" type={password} className="input-field icon-input" onChange={handleChange}/>
              <span onClick={showHidePassword} className="material-icons">{eye}</span>
            </div>
            <div className="submit-div">
              <input className="input-field" type="submit" value="Login" onClick={handleSubmit} />
            </div>
          </form>
          <div className="user-and-password-div">
            <p>Email: tombra4ril@gmail.com</p>
            <p>Password: asdf;lkj</p>
          </div>
          <div className="forget-password-div">
            <Link to="/reset_password">Forgot Password?</Link> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login