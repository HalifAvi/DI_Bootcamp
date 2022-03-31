// const User = () => {
//     return(
//         <div>
//             <h1>User Component</h1>
//         </div>
//     )
// }


// const User = (props) => {

//     console.log(props)
//     return(
//         <div>
//             <h1>Hello {props.name}</h1>
//             <h4>Hello {props.email}</h4>
//             <p>Hello {props.username}</p>
//         </div>
//     )
// }


// const User = (props) => {

//     const {name, email, username} = props; 

//     console.log(props)
//     return(
//         <div>
//             <h1>Hello {name}</h1>
//             <h4>Hello {email}</h4>
//             <p>Hello {username}</p>
//         </div>
//     )
// }


// const User = (props) => {

//     const {name, email, username} = props; 

//     // console.log(props)
//     return(
//         <div>
//             <div>{name}</div>
//             <div>{email}</div>
//             <div>{username}</div>
//         </div>
//     )
// }




// const User = (props) => {

//     const {user} = props;
//     const {name, email, username} = user; 

//     // console.log(props)
//     return(
//         <div style={{display:'inline-block', margin:'20px', padding:'10px', border:'1px solid #fff'}}>
//             <div>{name}</div>
//             <div>{email}</div>
//             <div>{username}</div>
//         </div>
//     )
// }




const User = (props) => {

    const {user} = props;
    const {name, email, username} = user; 

    // console.log(props)
    const outerDiv = {

        display:'inline-block',
        margin:'20px',
        padding:'10px',
        border:'1px solid #fff',
        backgroundColor: 'red',
        textAlign: 'center'
    }

    return(
        <div style={outerDiv}>
            <div>{name}</div>
            <div>{email}</div>
            <div>{username}</div>
        </div>
    )
}

export default User