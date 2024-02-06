import { Routes, Route} from "react-router-dom";
import { HomePage } from  "../pages";
 
export const AllRoutes = () => {
  return (
    <>
      <Route>
        <Route path="/" element={<HomePage/>}/>
      </Route>
    </>
  )
}

