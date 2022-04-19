import React from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import './style.css'



class Display extends React.Component{

    render(){

        const filteredRobotObjs = (this.props.robotsArr).filter(item => {

            return ((item.name).toLowerCase()).includes((this.props.searchField).toLowerCase())
      
        })

        return(

            <div style={{textAlign : "center"}}>

            {
                (filteredRobotObjs).map(item => {

                    return(
                        <>
                            <Card className="card animate" style={{ display: "inline-block" }}>
                                <Card.Img style={{ width: '100%', height: '20vw', objectFit: 'contain'}} src={`https://robohash.org/${item.id}?size=150x150`} />
                                <Card.Body>
                                    <Card.Text>
                                        <h6>Name: {item.name}</h6>
                                        <h6>Email: {item.email}</h6>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </>
                    )
                })
            }

        </div>
        )
    }
}

const mapStateToProps = (state) => {

    return{ 

        robotsArr : state.requestRobotsReducer.robotsArr,
        searchField : state.searchRobotsReducer.searchField,
    }
} 


export default connect(mapStateToProps, null)(Display);