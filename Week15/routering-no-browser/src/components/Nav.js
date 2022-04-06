
const Nav = (props) => {

    return(
        <>
            <button onClick={()=>props.navigateToFun('about')}> About </button>
            <button onClick={()=>props.navigateToFun('home')}> Home </button>
            <button onClick={()=>props.navigateToFun('contact')}> Contact </button>
        </>
    )
}

export default Nav;