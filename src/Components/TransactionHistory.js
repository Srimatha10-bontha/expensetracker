import React from 'react'


function TransactionHistory({transactions,onDeleteTransaction}){
  return (
    <div className='history'>
      <h2 className='transactionhistory'>Transaction History</h2>
      <ul>
        {
            transactions.map((data)=><li key={data.id}>{data.name}   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ${data.amount} <button onClick={()=>onDeleteTransaction(data.id)}>x</button></li>)
        }
        
    
      </ul>
    </div>
  )
}

export default TransactionHistory
