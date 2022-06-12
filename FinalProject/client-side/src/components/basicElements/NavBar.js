import '../BasicElementStyle/NavBar.css';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { activeLink, moveIndicator } from "../Assistants/NavBarExtFunctions.js";



const NavBar = ({positionOnNavBar, numOfPxOnNavBar}) => {

    useEffect(()=>{                    

        // Set the first location to the right icon
        let marker = document.querySelector('div#navBar-marker'); 
        let li_s = document.querySelectorAll('li'); 

        li_s[positionOnNavBar].className = "active";

        marker.style.left = numOfPxOnNavBar +"px";
        marker.style.width = 100 +"px";

        let list = document.querySelectorAll('ul li');

        list.forEach(link => {

            link.addEventListener('mousemove', (e)=> {

                moveIndicator(e.target);
            })
        });


        list.forEach(item =>
            
            item.addEventListener('mouseover', (e)=> {

                activeLink((e.target.parentElement).id);
            })
        );

    }, [])
        

    return(
        <>
            <div className={"navBar-container"}>
                <nav>
                    <ul>
                        <li id={0}><Link to ={process.env.REACT_APP_BASE_MAIN_PATH} id={"navBar-link-logo"}><ion-icon name={"person"}></ion-icon></Link></li>
                        <li id={1}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_GENERAL_RECEPIES_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><ion-icon name={"book"}></ion-icon></Link></li>
                        <li id={2}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_SPECIFIC_RECEPIES_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><ion-icon name={"pizza"}></ion-icon></Link></li>
                        <li id={3}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_FAV_RECEPIES_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><ion-icon name={"heart-empty"}></ion-icon></Link></li>
                        <li id={4}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_PREV_RECEPIES_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><ion-icon name={"calendar"}></ion-icon></Link></li>
                        <li id={5}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_INGREDIENTS_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><ion-icon name={"cart"}></ion-icon></Link></li>
                        <li id={6}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_GRAPH_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><ion-icon name={"podium"}></ion-icon></Link></li>
                        <li id={7}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_SETTINGS_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><ion-icon name={"settings"}></ion-icon></Link></li>
                        <li id={8}><Link to ={process.env.REACT_APP_BASE_LOADING_PAGE_PATH + process.env.REACT_APP_BASE_GENERAL_RECEPIES_PATH + "/" + process.env.REACT_APP_BASE_NAVBAR_NAV_TIME} id={"navBar-link-logo"}><ion-icon name={"exit"}></ion-icon></Link></li>

                        <div id="navBar-marker"></div>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default NavBar;
