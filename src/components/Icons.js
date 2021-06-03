import React from 'react'
import "./styles/Icons.scss"

const Icons = () => {
  const title = "admin"
  const icon_list = [
    "person",
    "person_outline",
    "accessibility_new",
    "sanitizer",
    "science",
    "attach_money",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
    "person",
  ]
  const name_list = [
    "Doctor",
    "Patient",
    "Nurse",
    "Pharmacist",
    "Laboratorist",
    "Accountant",
    "Appointment",
    "Payment",
    "Blood Bank",
    "Medicine",
    "Operation Report",
    "Birth Report",
    "Death Report",
    "Bed Allotment",
    "Notice Board",
    "Settings",
    "Language",
    "Backup"
  ]
  const link_list = [
    "/" + title + "/doctor",
    "/" + title + "/patient",
    "/" + title + "/nurse",
    "/" + title + "/pharmacist",
    "/" + title + "/laboratorist",
    "/" + title + "/accountant",
    "/" + title + "/doctor",
    "/" + title + "/patient",
    "/" + title + "/nurse",
    "/" + title + "/pharmacist",
    "/" + title + "/laboratorist",
    "/" + title + "/accountant",
    "/" + title + "/doctor",
    "/" + title + "/patient",
    "/" + title + "/nurse",
    "/" + title + "/pharmacist",
    "/" + title + "/laboratorist",
    "/" + title + "/accountant",
  ]
  const zipped = icon_list.map((item, index) => [item, name_list[index], link_list[index]])

  // handles icon button clicks to a url
  const handleClick = (event) => {
    
  }

  return (
    <div className="dashboard-icons-div">
      {
        zipped.map((item, index) => (
          <div key={index} data-url={item[2]} data-title={item[1]} onClick={handleClick}>
            <div className="icons-div">
              <span className="icons-icon material-icons">{item[0]}</span>
              <span className="icons-text">{item[1]}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Icons
