import { connect } from 'react-redux';
import TransactionForm from './TransactionForm';
import { updateIndex } from '../actions/index'; 
import { deleteFromList } from '../actions/index'; 
import React from 'react';
import './style.css';

class TransactionList extends React.Component{

    handleEdit = (e) => {

        this.props.updateIndex(e.target.id) // use 'updateIndex' to update in store the index of specific transaction to edit now 
    } 
    

    handleDelete = (e) => {

        this.props.delete(e.target.id);
    }

    render(){

        return(
            <div style={{textAlign : "center"}}>
                <h1>Financial Transactions:</h1>
                <TransactionForm />
                <br/>
                <table>
                        {
                            (this.props.list).map((item, idx) => {

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


const mapStateToProps = (state) => {

    return{

         list : state.list
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        updateIndex : (index) => dispatch(updateIndex(index)),
        delete : (transID) => dispatch(deleteFromList(transID))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionList);