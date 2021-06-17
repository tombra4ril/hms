import React, {useState, useEffect} from 'react'
import Sidebar from "../components/SideBar"
import ListAdd from '../components/ListAdd'
import Title from '../components/Title'
import Pagination from "../components/Pagination"
import "./styles/Manage.scss"

const Department = () => {
  const [content, setContent] = useState(0)
  const [departments, setDepartments] = useState([])
  const [name, setName] = useState("")
  const [desc, setDesc] = useState("")
  const [total, setTotal] = useState(0)
  const [numberOfItems, setNumberOfItems] = useState(5)
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(start + numberOfItems - 1)
  const [page, setPage] = useState(1)
  const [last, setLast] = useState(Math.ceil(total / numberOfItems))

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
    let len = depts.length
    setTotal(len)
    setLast(Math.ceil(len / numberOfItems))
    end <= len -1? setEnd(end): setEnd(len - 1)
  })

  // function for click on a title heading
  const showContent = head_index => {
    setContent(head_index)
  }

  // function for deleting a table row
  const del = (data_id, id) => {
    console.log("Delete clicked for id: ", data_id, " == with an id of: ", id)
  }
  
  // function for setttings for a table row
  const settings = (data_id, id) => {
    console.log("Settings clicked for id: ", data_id, " == with an id of: ", id)
  }
  
  // function to add a new name
  const addDeptName = (event) => {
    let name = event.target.value
    setName(name)
  }
  
  // function to add a new name
  const addDeptDesc = (event)  => {
    let desc = event.target.value
    setDesc(desc)
  }
  
  // function to add a new department
  const submitNew = (event) => {
    event.preventDefault()
    console.log("Department name is: ", name, " desc is: ", desc)
  }

  // function to handle how many number of items to display
  const handleShowNumber = (event) => {
    let number = parseInt(event.target.value)

    // set the number of items
    setNumberOfItems(number)

    // set start
    let _start = (start + 1) % number === 0? start: start - parseInt(number / 2)
    _start = (_start < 0)? 0: _start
    // set the end
    let _end = _start + number - 1
    _end = (_end > total - 1)? total - 1: _end

    setEnd(_end)
    setPage(Math.ceil((_end + 1) / number))
    setLast(Math.ceil(total / number))
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
                        <td className="align-center">{index + start + 1}</td>
                        <td>{department["name"]}</td>
                        <td>{department["desc"]}</td>
                        <td>
                          <div className="flex-wrap flex-just-sp-around flex-element flex-d-center flex-align-cent color-w">
                            <span onClick={() => settings(1, index)} className="material-icons bg-blue">build</span>
                            <span onClick={() => del(2, index)}className="material-icons bg-red">delete</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <Pagination start={start} setStart={setStart} end={end} setEnd={setEnd} total={total} page={page} setPage={setPage} numberOfItems={numberOfItems} last={last} />
              </div>
            }
            {
              content === 1 && 
              <div className="content-body add-sect">
                <form onSubmit={event => submitNew(event)}>
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