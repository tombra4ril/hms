import React, {useState, useEffect} from 'react'
import Sidebar from "../components/SideBar"
import ListAdd from '../components/ListAdd'
import Title from '../components/Title'
import Pagination from "../components/Pagination"
import "./styles/Manage.scss"

const Department = () => {
  const [content, setContent] = useState(0)
  const [departments, setDepartments] = useState([])
  const [deptName, setDeptName] = useState("")
  const [deptDesc, setDeptDesc] = useState("")
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
    document.title = "Hospital Management System - Departments"

    // items for the table
    const depts = [
      {
        "name": "Tombra",
        "desc": "Environmental Engineering"
      },
      {
        "name": "Ere",
        "desc": "Sciences"
      },
      {
        "name": "Preye",
        "desc": "Electrical Electronic Engineering"
      },
      {
        "name": "Bibi",
        "desc": "Mathematics"
      },
      {
        "name": "Jolly",
        "desc": "Physics"
      },
      {
        "name": "Samuel",
        "desc": "Accountant"
      },
      {
        "name": "Kelvin",
        "desc": "Nurse practice"
      },
      {
        "name": "Douye",
        "desc": "General Practitioner"
      },
      {
        "name": "Joshua",
        "desc": "Lab"
      },
      {
        "name": "Anthony",
        "desc": "Pharmacist"
      }
    ]
    setDepartments(depts)
    setTotal(depts.length)
  }, [])

  // function for click on a title heading
  const showContent = head_index => {
    setContent(head_index)
  }

  // function for deleting a table row
  const deptDelete = (data_id, id) => {
    console.log("Delete clicked for id: ", data_id, " == with an id of: ", id)
  }
  
  // function for setttings for a table row
  const deptSettings = (data_id, id) => {
    console.log("Settings clicked for id: ", data_id, " == with an id of: ", id)
  }
  
  // function to add a new department name
  const addDeptName = (event) => {
    let name = event.target.value
    setDeptName(name)
  }
  
  // function to add a new department name
  const addDeptDesc = (event)  => {
    let desc = event.target.value
    setDeptDesc(desc)
  }
  
  // function to add a new department name
  const submitDept = (event) => {
    event.preventDefault()
    console.log("Department name is: ", deptName, " desc is: ", deptDesc)
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
        <Title name="department" />
        <div className="bg-gray content-spacing">
          <div className="content-header">
            <ListAdd name="Department" onContentShow={showContent} />
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
                      <th>Department</th>
                      <th>Description</th>
                      <th>Option</th>
                    </tr>
                  </thead>
                  <tbody>
                    {departments.slice(start, start + numberOfItems).map((department, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{department["name"]}</td>
                        <td>{department["desc"]}</td>
                        <td>
                          <div className="flex-wrap flex-just-sp-around flex-element flex-d-center flex-align-cent color-w">
                            <span onClick={() => deptSettings(1, index)} className="material-icons bg-blue">build</span>
                            <span onClick={() => deptDelete(2, index)}className="material-icons bg-red">delete</span>
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
                    <label className="label">Department Name</label>
                    <input className="input" onChange={addDeptName} type="text" />
                    <label className="label">Department Description</label>
                    <input className="input" onChange={addDeptDesc} type="text" />
                  </div>
                  <div className="bg-gray add-div">
                    <p><button type="submit" className="add-submit-button">Add Department</button></p>
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

export default Department