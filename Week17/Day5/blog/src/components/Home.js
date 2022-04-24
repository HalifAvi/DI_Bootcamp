import React from "react";
import './style.css';
import {connect} from 'react-redux';
import blog from '../blog.png';
import {Link} from 'react-router-dom';




class Home extends React.Component{
    

    render(){

        let returnBlock = <div style={{textAlign:"center"}}>No posts to show</div>

        console.log('home', this.props.posts)
        
        if(this.props.posts.length > 0){

            returnBlock = (this.props.posts).map(post=> {
 
                            return (
                                    <div className="post" key={post.id}>
                                        <Link to={'/' + post.id} style={{color:"red"}}><h5>{post.title}</h5></Link>
                                        <p>{post.body}</p>
                                        <img src={blog}/>
                                    </div>
                                )
            })
        }
    
        return (

            <div className="home container">
                
                <h4>Home</h4>
                {
                    returnBlock
                }
            </div>
        )
    }
}


const mapStateToProps = (state) => {

    return{

        posts : state.posts
    }
}



export default connect(mapStateToProps, null)(Home);














