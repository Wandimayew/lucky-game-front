import Category from "../screan/Category"
import Home from "../screan/Home"
import { Route, Router, Routes } from "react-router-dom"
const Rout = () => {
    return(
        <Router>
            <div>
               <Routes>
                <Route path ='/' element={<Home/>}>
                    <Route path="cat" element={<Category/>}/>
                </Route>
               </Routes>
            </div>
        </Router>
    )
}
export default Rout