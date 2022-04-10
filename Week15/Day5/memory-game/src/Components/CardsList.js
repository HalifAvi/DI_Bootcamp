import React from "react";
import data from '../Superheroes.json';
import HeroCard from './HeroCard'

class CardsList extends React.Component{

    constructor(){

        super();
        this.state = {

            superHerosArr : data.superheroes,
            score : 0,
            topScore : 0

        }
    }

    handleClick = (id, clicked) => {

        this.shuffleArray(this.state.superHerosArr);

        let objPositionInArr = this.state.superHerosArr.findIndex((item) => item.id == id);

        if(clicked){

            this.state.score > this.state.topScore ?  this.setState({score : 0, topScore : this.state.score }) : this.setState({score : 0 });
                
            (this.state.superHerosArr).forEach(element => {

                element.clicked = false;
                
            });
        }
        else{

            (this.state.superHerosArr)[objPositionInArr].clicked = true;
            this.setState({score : ++(this.state.score)});
        }

        console.log(this.state.superHerosArr)
    }


    shuffleArray = (array) => {

        let curId = array.length;

        // There remain elements to shuffle
        while (0 !== curId) {

          // Pick a remaining element
          let randId = Math.floor(Math.random() * curId);

          curId -= 1;

          // Swap it with the current element.
          let tmp = array[curId];
          array[curId] = array[randId];
          array[randId] = tmp;
        }

        return array;
      }


    render(){

        console.log(this.state.score)
        console.log(this.state.topScore)

        return(

            <>
                <div style={{backgroundColor : "red", color: "white"}}>
                    <h1>Superheroes Memory Game</h1>
                    <h6>Score: {this.state.score}</h6>
                    <h6>Top Score: {this.state.topScore}</h6>
                </div>

                <div>
                    <h3 style={{background: "linear-gradient(to left top,#00f,red) 50% fixed", color : "white"}}>Get points by clicking on an image but don't click on any more than once!</h3>
                </div>

                {
                       (this.state.superHerosArr).map((item, idx)=> {

                        return <HeroCard key={idx} id={item.id} name={item.name} occupation={item.occupation}
                                image={item.image} clicked={item.clicked} fun={this.handleClick}/>
                    })
                }
            </>
        )
    }
}

export default CardsList;