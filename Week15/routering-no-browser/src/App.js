import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Nav from './components/Nav'
import React from 'react';

class App extends React.Component {
  
  constructor(){

    super();
    this.state = {

      page : 'home'
    }
  }


  navigateTo = (pageToNav) => {

    this.setState({page : pageToNav});
  }
  
  render(){

    switch(this.state.page){

      case 'home' : return (<>
                             <Nav navigateToFun={this.navigateTo}/>
                             <Home />
                            </>);


      case 'about' : return (<>
                              <Nav navigateToFun={this.navigateTo}/>
                              <About />
                            </>);


      case 'contact' : return (<>
                                <Nav navigateToFun={this.navigateTo}/>
                                <Contact />
                              </>);


      default : return (<>
                          <Nav navigateToFun={this.navigateTo}/>
                          <Home />
                        </>);
    }
  }
}

export default App;
