import axios from 'axios';
import React from 'react';
import Task from './Task';

class Form extends React.Component{

    constructor(){

        super();
        this.state = {

            text : "",
            allTasksArr : []
        }
    }


    deleteTask = async(taskIdToDel) => {

        try{
    
            await axios(`http://localhost:5000/deleteTask?taksToDel=${taskIdToDel}`);
            
            this.updateArr();
    
        }catch(e){
    
            console.log(e);
        }
    }


    handleSubmit = (e) => {

        e.preventDefault();

        (document.querySelector('input')).value = '';

        this.sendTaskToDB();
    }


    handleChange = (e) => {

        this.setState({text : e.target.value});
    }


    sendTaskToDB = async() => {

        try{

            const response = await axios(`http://localhost:5000/addTask?newTask=${this.state.text}`);

            this.updateArr();

        }catch(e){

            console.log(e);
        }
    }

    updateArr = async () => {

        try{

            const response = await axios(`http://localhost:5000/allTasks`);

            this.setState({allTasksArr : response.data})
                    
        }catch(e){

            console.log(e);
        }
    }


    render(){

        let toRender;

        if((this.state.allTasksArr).length == 0){

            toRender = <p style={{textAlign : "center", fontSize : "30px"}}>You have no todo's left, yay!</p>
        }else{

            toRender = ( this.state.allTasksArr ).map( task=> {

                        return(
                        <div style={{marginLeft : "230px", backgroundColor : "white" , width : "800px"}}>
                        <Task id={task.task_id} key={task.task_id} des={task.task_description} fun={this.deleteTask}/>
                        <hr/>
                        </div>
                        )
            }) 
        }

        return(

            <>
                <h1 style={{textAlign : "center", color : "lightskyblue", fontSize : "100px"}}>TODO'S</h1>
                <form style={{textAlign : "center"}} onSubmit={this.handleSubmit}>
                    <label style={{fontSize : "30px", fontWeight : "bold"}}>Add a new todo:</label><br/>
                    <input style={{width : "600px", height : "30px"}} name={"newTask"} type={"text"} onChange={this.handleChange}></input>
                </form>

                {   
                    toRender
                }
            </>
        )
    }
}

export default Form;