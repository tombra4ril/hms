import React, {useState, useEffect} from 'react'
import Sidebar from "../components/SideBar"
import ListAdd from '../components/ListAdd'
import Title from '../components/Title'
import Pagination from "../components/Pagination"
import "./styles/Manage.scss"

const Doctor = () => {
  const [content, setContent] = useState(0)
  const [doctors, setDoctors] = useState([])
  const [docName, setDocName] = useState("")
  const [docEmail, setDocEmail] = useState("")
  const [docPassword, setDocPassword] = useState("")
  const [docAddress, setDocAddress] = useState("")
  const [docPhone, setDocPhone] = useState("")
  const [docDept, setDocDept] = useState("")
  const [total, setTotal] = useState(0)
  const [numberOfItems, setNumberOfItems] = useState(5)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + numberOfItems - 1)
  const [page, setPage] = useState(1)

  // call this when you want to change the section content
  useEffect(() => {
  }, [content])
  
  // This is called when this page is called
  useEffect(() => {
    // set page title
    document.title = "Hospital Management System - Doctors"

    // items for the table
    const docs = [
      {
        "name": "Tombra",
        "dept": "Environmental Engineering"
      },
      {
        "name": "Ere",
        "dept": "Sciences"
      },
      {
        "name": "Preye",
        "dept": "Electrical Electronic Engineering"
      },
      {
        "name": "Bibi",
        "dept": "Mathematics"
      },
      {
        "name": "Jolly",
        "dept": "Physics"
      },
      {
        "name": "Samuel",
        "dept": "Accountant"
      },
      {
        "name": "Kelvin",
        "dept": "Nurse practice"
      },
      {
        "name": "Douye",
        "dept": "General Practitioner"
      },
      {
        "name": "Joshua",
        "dept": "Lab"
      },
      {
        "name": "Anthony",
        "dept": "Pharmacist"
      }
    ]
    setDoctors(docs)
    setTotal(docs.length)
  }, [])
  
  // function for click on a title heading
  const showContent = head_index => {
    setContent(head_index)
  }

  // function for deleting a table row
  const docDelete = (data_id, id) => {
    console.log("Delete clicked for id: ", data_id, " == with an id of: ", id)
  }
  
  // function for setttings for a table row
  const docSettings = (data_id, id) => {
    console.log("Settings clicked for id: ", data_id, " == with an id of: ", id)
  }
  
  // function to add a new department name
  const addName = (event) => {
    let name = event.target.value
    setDocName(name)
  }
  
  // function to add a new department name
  const addDept = (event)  => {
    let desc = event.target.value
    setDocDept(desc)
  }
  
  // function to add a new department name
  const submitDept = (event) => {
    event.preventDefault()
    console.log("Doctor name is: ", docName)
  }

  // function to handle how many number of items to display
  const handleShowNumber = (event) => {
    let number = parseInt(event.target.value)

    // set the number of items
    setNumberOfItems(number)

    // set the end
    let _end = start + number - 1
    _end = (_end > total - 1)? total - 1: _end
    setEnd(_end)
    setPage(Math.ceil(total / number))
  }

  return (
    <div className="section">
      <Sidebar />
      <div className="content-section">
        <Title name="doctor" />
        <div className="bg-gray content-spacing">
          <div className="content-header">
            <ListAdd name="Doctor" onContentShow={showContent} />
          </div>
          <div className="content-body">
            {
              content === 0 &&
              <div className="comp-sect">
                <div className="search-form flex-element flex-just-sp-between">
                  <div className="row-input-div search-form-left">
                    <label>Search:</label>
                    <input type="text" />
                  </div>
                  <div className="row-input-div search-form-right">
                    <label>Show:</label>
                    <select onChange={handleShowNumber}>
                      <option value="5">5</option>
                      {total >= 10 && <option value="10">10</option>}
                      {total >= 20 && <option value="15">15</option>}
                    </select>
                    <span>entries</span>
                  </div>
                </div>
                <table>
                  <thead>
                    <tr>
                      <th><span className="material-icons">view_list</span></th>
                      <th>Doctor Name</th>
                      <th>Department</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {doctors.slice(start, start + numberOfItems).map((doctor, index) => (
                      <tr key={index}>
                        <td>{start + 1 + index}</td>
                        <td>{doctor["name"]}</td>
                        <td>{doctor["dept"]}</td>
                        <td>
                          <div className="flex-element flex-wrap flex-d-center flex-just-sp-around flex-align-cent color-w">
                            <span onClick={() => docSettings(1, index)} className="material-icons bg-blue">build</span>
                            <span onClick={() => docDelete(2, index)}className="material-icons bg-red">delete</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination start={start} setStart={setStart} end={end} setEnd={setEnd} total={total} page={page} setPage={setPage} numberOfItems={numberOfItems} />
              </div>
            }
            {
              content === 1 && 
              <div className="content-body add-sect">
                <form onSubmit={event => submitDept(event)}>
                  <div className="bg-gray add-form">
                    <label className="label">Name</label>
                    <input className="input" onChange={addName} type="text" />
                    <label className="label">Email</label>
                    <input className="input" onChange={addName} type="email" />
                    <label className="label">Password</label>
                    <input className="input" onChange={addName} type="password" />
                    <label className="label">Confirm Password</label>
                    <input className="input" onChange={addName} type="password" />
                    <label className="label">Address</label>
                    <input className="input" onChange={addName} type="text" />
                    <label className="label">Phone</label>
                    <input className="input" onChange={addName} type="tel" />
                    <label className="label">Department</label>
                    <select className="input">
                      <option disabled>Select Department</option>
                    </select>
                  </div>
                  <div className="bg-gray add-div">
                    <p><button type="submit" className="add-submit-button">Add Doctor</button></p>
                  </div>
                </form>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctor