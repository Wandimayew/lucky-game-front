import React, { useState,useContext } from 'react';
import { ChoiceContext } from "../context/ChoiceContext";
import HttpClient from '../middleware/HttpClient';
import { useKeycloak } from '@react-keycloak/web';


const WithdrawForm = ({exist}) => {
  const { categoryChoiceId } = useContext(ChoiceContext);
  const api=HttpClient();
  const { keycloak } = useKeycloak();
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    bankName: '',
    accountNumber: '',
    amount: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    let player_id=keycloak.idTokenParsed.sub;
    console.log(player_id);
    e.preventDefault();
    // Add your withdrawal logic here
    console.log('Withdrawal submitted:', formData);
    api.post(`api/transaction/addWithDraw/${player_id}`, formData).then((response)=>{
      console.log("With draw added success fully.",response);
    }).catch((error)=>{
      console.log("error for withdraw,",error);
    })
    // Reset form after submission
    setFormData({
      name: '',
      fatherName: '',
      bankName: '',
      accountNumber: '',
      amount: '',
    });
  };
  const handleExist=()=>{
    exist();
  }


  return (
    <div className="max-w-md mx-auto bg-[#020917]  border-2 border-orange-500 p-4 rounded-lg">
  <p onClick={handleExist} className='text-xl hover:cursor-pointer bg-white w-auto font-bold'>Exist</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-2 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="fatherName" className="block text-sm font-medium text-white">Father's Name</label>
          <input
            type="text"
            id="fatherName"
            name="fatherName"
            value={formData.fatherName}
            onChange={handleChange}
            className="mt-2 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="bankName" className="block text-sm font-medium text-white">Bank Name</label>
          <input
            type="text"
            id="bankName"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="mt-2 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="accountNumber" className="block text-sm font-medium text-white">Account Number</label>
          <input
            type="text"
            id="accountNumber"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            className="mt-2 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-white">Amount</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="mt-2 h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-3/4 sm:text-sm border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <button type="submit" className="w-32 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Withdraw
          </button>
        </div>
      </form>
    </div>
  );
};

export default WithdrawForm;
