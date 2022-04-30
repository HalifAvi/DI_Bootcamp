import React from "react";
import { connect } from "react-redux";
import { insert } from '../actions/index'; 
import { update } from '../actions/index'; 

class TransactionForm extends React.Component{

    constructor(){

        super();

        this.state = {

            accountNumber : '',
            FSC : '',
            name : '',
            amount : ''
        }
    }


    handleSubmit = (e) => {

        e.preventDefault();

        if(this.props.currentIndex === -1){ // Insert new transaction

            this.props.insert(this.state); // Use 'insert' action and send the current 'transaction'

        }else{ // Update a transaction
            
            const { accountNumber, FSC, name, amount } = this.state; // destructuring
            const { currentIndex, list } = this.props;

            // send the properties you update + those who remain 
            // In 'state' we have the properties we updated
            // In 'props' we have the properties we had before updating
            this.props.update( {

                accountNumber : (accountNumber === '') && (list[currentIndex].accountNumber !== '') ? '' : accountNumber,
                FSC : (FSC === '') && (list[currentIndex].FSC !== '') ? '' : FSC,
                name : (name === '') && (list[currentIndex].name !== '') ? '' : name,
                amount : (amount === '') && (list[currentIndex].amount !== '') ? '' : amount
            });
        }

        e.target.reset();
    }


    handleInputChange  = (e) => {

        this.setState({[e.target.name] : e.target.value});
    }

    render(){

        const {currentIndex, list} = this.props; // destructuring

            return(

                <>
                    <form onSubmit={this.handleSubmit} style={{textAlign : "center"}}>
                        <input defaultValue={currentIndex===-1? '' : (list)[currentIndex].accountNumber} style={{display: "inline-block"}} name={"accountNumber"} type={"text"} placeholder="Account Number" onChange={this.handleInputChange}/>
                        <input defaultValue={currentIndex===-1? '' : (list)[currentIndex].FSC} style={{display: "inline-block"}} name={"FSC"} type={"text"} placeholder="FSC" onChange={this.handleInputChange}/>
                        <input defaultValue={currentIndex===-1? '' : (list)[currentIndex].name} style={{display: "inline-block"}} name={"name"} type={"text"} placeholder="A/C Holder Name" onChange={this.handleInputChange}/>
                        <input defaultValue={currentIndex===-1? '' : (list)[currentIndex].amount} style={{display: "inline-block"}} name={"amount"} type={"text"} placeholder="Amount" onChange={this.handleInputChange}/>
                        <input style={{display: "inline-block"}} type={"submit"} value="submit"/>
                    </form>
                </>
            )
    }  
}

const mapStateToProps = (state) => {

    return{

        list : state.list,
        currentIndex : state.currentIndex
    }
}


const mapDispatchToProps = (dispatch) => {

    return{

        insert: (transactionObj) => dispatch(insert(transactionObj)),
        update: (transactionObj) => dispatch(update(transactionObj))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm);