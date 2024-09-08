import React, { useState } from 'react'
import { uniqueId } from '../Components/Utils';


const TransactionForm = ({onNewTransaction}) => {

  const[namevalue,setNameValue]=useState('');
  const[amountvalue,setAmountValue]=useState('');

  const addTransaction=(type,evt)=>{
    evt.preventDefault();
    const data={id:uniqueId(),name:namevalue,amount:parseInt(amountvalue),type:type};
    onNewTransaction(data);


    console.log(data)
    setNameValue('');
    setAmountValue('');
  }
  return (
    <div className='transactionform'>
      <h2 className='newtransaction'>Add New Transaction</h2>
      <form>
        <div>
        <label for="name">Name</label>
        </div>
        <div>
        <input type="text" value={namevalue}  onChange={(e)=>setNameValue(e.target.value)}/>
        </div>
        <div>
        <label for="amount">Amount</label>
        </div>
        <div>
        <input type="number"  value={amountvalue} onChange={(e)=>setAmountValue(e.target.value)}/>

        </div>
        <div>
            <button className='addincome' onClick={(e)=>addTransaction('income',e)}>Add Income</button>
        </div>
        <div>
            <button className='addexpense' onClick={(e)=>addTransaction('expense',e)}>Add Expense</button>
        </div>
      </form>
    </div>
  )
}

export default TransactionForm
