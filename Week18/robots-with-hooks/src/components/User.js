import React from 'react';

const User = (props) => {

  
  const {user} = props;
  const {name,email,username,id} = user;


  return(
    <div className='dib pa3 ma2 tc bg-light-green grow br3'>
      <div><img src={`https://robohash.org/${id}?size=150x150`} alt="" title="" /></div>
      <div>{name}</div>
      <div>{email}</div>
      <div>{username}</div>
    </div>
  )
}
export default User
