import React from 'react'


function Pay({fname,lname,email,amount,tx_ref,public_key}) {
  return (
    <div>
         <div>
    < form method="POST" action="https://api.chapa.co/v1/hosted/pay" >
 <input type="hidden" name="public_key" value={public_key} />
 <input type="hidden" name="tx_ref" value="negade-tx-12345678sss9" />
 <input type="hidden" name="amount" value={amount} />
 <input type="hidden" name="currency" value="ETB" />
 <input type="hidden" name="email" value={email} />
 <input type="hidden" name="first_name" value={fname} />
 <input type="hidden" name="last_name" value={lname} />
 <input type="hidden" name="title" value="Let us do this" />
 <input type="hidden" name="description" value="Paying with Confidence with cha" />
 <input type="hidden" name="logo" value="https://chapa.link/asset/images/chapa_swirl.svg" />
 <input type="hidden" name="callback_url" value="https://example.com/callbackurl" />
 <input type="hidden" name="return_url" value="https://example.com/returnurl" />
 <input type="hidden" name="meta[title]" value="test" />
 <button className="bg-orange-500 hover:bg-orange-600 mt-5 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 transition duration-300">
            Pay Now
          </button>
</form>

 </div>
 
 </div>
  )
}

export default Pay