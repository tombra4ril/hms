import {createContext} from 'react'

export const CategoryContext = createContext()

// export const CategoryProvider = props => {
//   const [user_category, setUserCategory] = useState("")
//   return (
//     <CategoryContext.Provider value={[user_category, setUserCategory]}>
//       {props.children}
//     </CategoryContext.Provider>
//   )
// }