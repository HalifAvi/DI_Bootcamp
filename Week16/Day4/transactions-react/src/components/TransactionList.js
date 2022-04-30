import TransactionForm from './TransactionForm';
import React from 'react';
import './style.css';

class TransactionList extends React.Component{

    constructor(){

        super();
        this.state = {

            currentIndex: -1,
            list : JSON.parse(localStorage.getItem('transactions'))
        }
    }

    componentDidMount(){

        if(localStorage.getItem('transactions') === null){

            let transactions = [];
            localStorage.setItem("transactions", JSON.stringify(transactions));
        }
    }

    handleEdit = (e) => {

        
    } 
    

    handleDelete = (e) => {

        
    }

    render(){

        return(
            <div style={{textAlign : "center"}}>
                <h1>Financial Transactions:</h1>
                <TransactionForm />
                <br/>
                <table>
                        {
                            (this.state.list).map((item, idx) => {

                                return(
                                    <>
                                        <tr>
                                            <td>{item.accountNumber}</td>
                                            <td>{item.FSC}</td>
                                            <td>{item.name}</td>
                                            <td>{item.amount}</td>
                                            <td><button id={idx} onClick={this.handleEdit}>EDIT</button></td>
                                            <td><button id={idx} onClick={this.handleDelete}>DELETE</button></td>
                                        </tr>
                                    </>
                                )  
                            })
                        }
                </table>
            </div>
        )
    }
}


export default TransactionList;