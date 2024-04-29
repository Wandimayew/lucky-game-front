import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import WithdrawAnimation from '../assets/Withdraw.json';
import axios from 'axios';
import HttpClient from '../middleware/HttpClient';

function WithdrawForAdmin() {
  const [withdrawals, setWithdrawals] = useState([]);
  const api = HttpClient();


  useEffect(() => {
    api.get(`api/transaction/getPendingBalance`)
      .then(response => {
        console.log(response);
        setWithdrawals(response.data.pending);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 

  const handleApproval=(id,player_id)=>{
    api.post(`api/transaction/completeWithDraw`,{
      player_id,id
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error completing approval:', error);
      });
  }
  const handleCancel=(id,player_id)=>{
    api.delete(`api/transaction/cancelWithDraw`,{
      player_id,id
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error('Error completing approval:', error);
      });
  }

  return (
    <div className='text-white '>
      <div className="flex items-center justify-center mb-4 pb-5">
        <Lottie animationData={WithdrawAnimation} style={{ width: 65, height: 65 }} className='pb-3'/>
        <h2 className="text-2xl text-orange-600 font-bold ml-2 ">Withdraw Requests</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Father Name</th>
              <th className="px-4 py-2">Bank Name</th>
              <th className="px-4 py-2">Account Number</th>
              <th className="px-4 py-2">Balance</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {withdrawals.map(withdrawal => (
              <tr key={withdrawal.id}>
                <td className="border px-4 py-2">{withdrawal.first_name}</td>
                <td className="border px-4 py-2">{withdrawal.father_name}</td>
                <td className="border px-4 py-2">{withdrawal.bank_name}</td>
                <td className="border px-4 py-2">{withdrawal.account_number}</td>
                <td className="border px-4 py-2">{withdrawal.balance}</td>
                <td className="border px-4 py-2">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={handleApproval(withdrawal.id,withdrawal.player_id)}
                  >Approve</button>
                  <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCancel(withdrawal.id,withdrawal.player_id)}
                  >Cancel</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-start mt-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">See More</button>
      </div>
    </div>
  );
}

export default WithdrawForAdmin;
