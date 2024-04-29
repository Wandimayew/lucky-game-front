import React, { useState } from 'react';
import Pay from "./Pay";
import Add from './Add';

const AddBalance=({exist})=>{
    const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState('');
  
  const tx_ref = '';

  const public_key = "CHAPUBK_TEST-ugmqoPtY9HtCcpmg9GRD0J0zTkKwl8GX";
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    console.log(e.target.value);
  };
  const handleExist=()=>{
    exist();
  }
  

  return (
    <div>
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-[#020917] text-white p-8 rounded-lg border-2 border-orange-500">
        <p onClick={handleExist} className='text-xl hover:cursor-pointer font-bold'>Exist</p>
        <h1 className="text-3xl mb-6">Payment Form</h1>
        <div className="flex flex-col space-y-6">
          <input
            className="input-field px-4 py-2"
            onChange={(e) => handleInputChange(e, setFname)}
            value={fname}
            type="text"
            placeholder="First Name"
            style={{ color: fname ? 'black' : 'white' }}
          />
          <input
            className="input-field px-4 py-2"
            onChange={(e) => handleInputChange(e, setLname)}
            value={lname}
            type="text"
            placeholder="Last Name"
            style={{ color: lname ? 'black' : 'white' }}
          />
          <input
            className="input-field px-4 py-2"
            onChange={(e) => handleInputChange(e, setEmail)}
            value={email}
            type="email"
            placeholder="Email"
            style={{ color: email ? 'black' : 'white' }}
          />
          <input
            className="input-field px-4 py-2"
            onChange={(e) => handleInputChange(e, setAmount)}
            value={amount}
            type="number"
            placeholder="Amount"
            style={{ color: amount ? 'black' : 'white' }}
          />
        </div>
        <Pay fname={fname} lname={lname} email={email} amount={amount} tx_ref={tx_ref} public_key={public_key} />
      </div>
    </div>
    </div>

  );
}

export default AddBalance;