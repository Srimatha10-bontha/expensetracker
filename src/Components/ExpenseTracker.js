import React, { useEffect, useState } from 'react'
import Expense from './Expense';
import TransactionHistory from './TransactionHistory';
import TransactionForm from './TransactionForm';
import { uniqueId } from '../Components/Utils';


//container component

const TransactionData=[
   
];
const ExpenseTracker = () => {
  const[income,setIncome]=useState(0);
  const[expense,setExpense]=useState(0);
  const[transactions,setTransactions]=useState([]);

  const saveState=()=>{
    localStorage.setItem('expenseTrackerState',JSON.stringify(transactions));
  }

  const calculateExpenses=()=>{
    let income=0,expense=0;
     console.log(transactions)


    transactions.forEach((data)=>{
      if(data.type==='income'){
        income+=data.amount;
      }
      else if(data.type== 'expense'){
        expense+=data.amount;
      }
    })
    saveState();
     setIncome(income);
     setExpense(expense);
  
  };

  const handleAddNewTransaction=item=>{
    let newTransactions=[...transactions,item];
    console.log('new transactions:',newTransactions)
    setTransactions(newTransactions);
    
    
  }

  const handleDeleteTransaction =id=>{
    console.log(id)
    const newTransactions=transactions.filter((item)=>item.id !=id);
    setTransactions(newTransactions)
    console.log(newTransactions)
  }
  useEffect(()=>{
    let localState=JSON.parse(localStorage.getItem('expenseTrackerState'));
    if(localState){
      setTransactions(localState);
    }
    else{
      calculateExpenses();

    }

  },[]);
  useEffect(()=>{
    

    
    calculateExpenses();

  },[transactions]);

  
  return (
    <div>
      <h1 className='expensetracker'>Expense Tracker</h1>
      <Expense income={income} expense={expense}/>
      <TransactionHistory  transactions={transactions} onDeleteTransaction={handleDeleteTransaction}/>
      <TransactionForm onNewTransaction={handleAddNewTransaction}/>
    </div>
  )
}

export default ExpenseTracker;
