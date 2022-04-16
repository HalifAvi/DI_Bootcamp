
import React from "react";

class Card extends React.Component{

    constructor(){

        super();
    }


    render(){

        const {label, number, icon} = this.props.postDetails

        return(
            <div style={{ display: "inline-block", backgroundColor:"white", margin:"5px", width:"500px", borderRadius: "5px", paddingLeft: "5px"}}>
                <i style={{display:"inline", marginRight:"20px"}} className={icon}></i>
                <h6 style={{display:"inline"}}>{label}</h6>
                <h6 style={{fontSize:"70px", padding:"0px", margin:"0px"}}>{number}</h6>
            </div>
        )



    }
}

export default Card;