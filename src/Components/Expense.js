import React from 'react'

const Expense = ({income,expense}) => {
  return (
    <div>
        <div className='container'>
      <h2 className='yourbalance'>Your Balance</h2>
      <div className='income-expense'>${income-expense}</div>
      </div>
      <div className='childs'>
          <div className='child1'>
            <h2 className='Income'>Income</h2>
            <div className='income'>${income}</div>
          </div>
          <div className='child2'>
            <h2 className='Expense'>Expense</h2>
            <div className='expense'>${expense}</div>
          </div>
      </div>
    </div>
  )
}

export default Expense
