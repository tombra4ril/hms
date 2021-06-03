import React from 'react'
import {NavLink} from "react-router-dom"

const SideBarLink = ({item}) => {
  return (
    <NavLink activeClassName="active" to={item[2]}>
      <span className="sidebar-row-icon material-icons">{item[0]}</span>
      <span className="sidebar-row-text">{item[1]}</span>
    </NavLink>
  )
}

export default SideBarLink
