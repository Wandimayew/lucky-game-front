import ma1 from '../assets/img/ma2.png';

const ApplyTeacher = () => {
    return (
        <div className="mt-10 mb-16 mr- flex justify-between items-start">
            <div className=" ml-20 mr-10 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
                <img src={ma1} alt=" Teacher Application" className=" p-8 w-full h-full object-cover rounded-lg" />
                <h2 className="font-bold text-lg mt-2">Become a teacher</h2>
                <p className="pl-10 mt-2 text-sm">Launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively.</p>
                <div className=' pl-72 mb-8'>
    <button className="bg-blue-500 pr-5 text-white px-10 py-3 rounded-lg mt-2">Apply a Teacher</button>
</div>  </div>
<div className="  mr-10 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
                <img src={ma1} alt=" Teacher Application" className=" p-8 w-full h-full object-cover rounded-lg" />
                <h2 className="font-bold text-lg ">Become a teacher</h2>
                <p className="pl-10 mt-2 text-sm">Launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively.</p>
                <div className=' pl-72 mb-8'>
    <button className="bg-blue-500 pr-5 text-white px-10 py-3 rounded-lg mt-2">Apply a Teacher</button>
</div>  </div>
        </div>
    );
}

export default ApplyTeacher;
