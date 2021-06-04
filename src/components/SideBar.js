import React from 'react'
import SideBarLink from './SideBarLink'
import "./styles/SideBar.scss"

const Sidebar = () => {
const icon_list = [
    "home",
    "dashboard",
    "person",
    "person_outline",
    "accessibility_new",
    "sanitizer",
    "science",
    "attach_money",
    "manage_accounts",
    "settings",
    "account_box" 
  ]
  const name_list = [
    "Dashboard",
    "Department",
    "Doctor",
    "Patient",
    "Nurse",
    "Pharmacist",
    "Laboratorist",
    "Accountant",
    "Monitor Hospital",
    "Settings",
    "Profile"
  ]
  const link_list = [
    "/dashboard",
    "/departments",
    "/doctors",
    "/patients",
    "/nurses",
    "/pharmacists",
    "/laboratorists",
    "/accountants",
    "/hospitals",
    "/settings",
    "/profiles"
  ]
  // const [user_category] = useContext(CategoryContext)
  const user_category = localStorage.getItem("user_category").toLowerCase()
  let test_user = ""
  if(user_category === "admin"){// admin sidebar
    test_user = [true, true, true, true, true, true, true, true, true, true, true]
  }
  else if(user_category === "doctor"){// doctor sidebar
    test_user = [true, false, false, false, true, false, false, false, false, true, true]
  }
  else if(user_category === "patient"){// patient sidebar
    test_user = [true, true, true, true, true, true, false, true, true, true, true]
  }
  else if(user_category === "nurse"){// nurse sidebar
    test_user = [true, true, true, true, true, true, true, false, true, true, true]
  }
  else if(user_category === "pharmacist"){// pharm sidebar
    test_user = [true, true, true, true, true, true, true, true, false, true, true]
  }
  else if(user_category === "laboratorist"){// lab sidebar
    test_user = [true, true, true, true, true, true, true, true, true, false, true]
  }
  else if(user_category === "accountant"){// accountant sidebar
    test_user = [true, true, true, true, true, true, true, true, true, false, true]
  }
  else{
    test_user = [false, false, false, false, false, false, false, false, false, false, false]
  }
  const zipped = test_user.filter((test_value) => test_value).map((item, index) => [icon_list[index], name_list[index], link_list[index]])

  return (
    <div className="sidebar">
      <div className="sidebar-title">
        <span className="material-icons">bubble_chart</span>
      </div>
      <div className="sidebar-div">
        {
          zipped.map((item) => (
            <div className="sidebar-row" key={item[1]}>
              <SideBarLink key={item[1]} item={item} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Sidebar
