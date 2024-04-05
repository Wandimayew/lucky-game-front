import Affordable from "../component/Affordable"
import ApplyTeacher from "../component/ApplyTeacher"
import Footer from "../component/Footer"
import GetChoice from "../component/GetChoice"
import Lists from "../component/Lists"
import Navbar from "../component/Navbar"
import StudentsSay from "../component/StudentsSay"

const Membership  = () =>  {
    return  (
 <div>
    <Navbar/>
    <Affordable/>
    <GetChoice/>
    <Lists/>
    <StudentsSay/>
    <ApplyTeacher/>
    <Footer/>

 </div>
    )
}
export default Membership
