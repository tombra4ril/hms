import React, {useContext} from 'react'
import { CategoryContext } from '../common/CategoryContext'

const Error = () => {
  const [cat] = useContext(CategoryContext)
  return (
    <div>
      <h1>Error, Page not Found {cat} user!</h1>
    </div>
  )
}

export default Error