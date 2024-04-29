import React from 'react';
import Pro from '../com/pro';
import Notification from '../com/Notfication';


const Profile = () => {
  return (
    <div className=" bg-[#020917] flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row ">
        <Pro/>
        <Notification/>
      </div>
    </div>
  );
};

export default Profile;
