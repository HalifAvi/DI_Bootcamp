import './TaskStyle.css';

const Task = (props) => {

    return(
       
        <>
            <p className='task' style={{padding : "0px"}} onClick={()=>props.fun(props.id)}>{props.des}</p>
        </>
    )
}

export default Task;