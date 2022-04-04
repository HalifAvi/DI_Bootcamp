import React from 'react';

// class User extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       phone:'050555555'
//     }
//   }
//   componentDidMount(){
//     this.setState({phone:'9999999'})
//   }
//   render(){
//     const {phone} = this.state;
//     const {name, email} = this.props;
//     return(
//       <div>
//         {name}
//         <br/>
//         {email}
//         <br />
//         {phone}
//       </div>
//     )
//   }
// }

const User = (props) => {
  const {user} = props;
  const {name,email,username,id} = user;
  return(
    <div className='dib pa3 ma2 tc bg-light-green grow br3'>
      <div><img src={`https://robohash.org/${id}?size=150x150`} /></div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{username}</div>
    </div>
  )
}
export default User
