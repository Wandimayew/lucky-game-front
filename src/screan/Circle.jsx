import Speedometer from '../com/Speedometer';
import Speedometer1 from '../com/Speedometer1';
import Speedometer2 from '../com/Speedometer2';
import Speedometer3 from '../com/Speedometer3';

const Circle = () => {
    return (
        <div className='flex mx-32 text-white mb-5 bg-[#081730]  rounded-3xl border-2 border-orange-500'>
            <Speedometer />
            <Speedometer1 />
            <Speedometer2 />
            <Speedometer3 />
        </div>
    );
}

export default Circle;
