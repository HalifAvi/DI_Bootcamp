import React from "react";


const User = props => {

    const {user} = props;

    return(
        <div>

        {
            user.name
        }
        <br></br>
        {
            user.email
        }


        </div>
    )
}


// class User extends React.Component{

//     constructor(){
    
//       super()
//       this.state = {

//         phone : "0544664887"
//       }
//     }

//     componentDidMount(){

//         this.setState({phone : "9999999999"})
//     }
    
    
//     render(){

//         const {name, email} = this.props;
//         const {phone} = this.state;
    
//       return(

//         <div>

//             {
//                 name
//             }
//             <br></br>
//             {
//                 email
//             }
//             <br></br>
//             {
//                 phone
//             }

//         </div>
//       )
//     }
//     }
    
    export default User;
    