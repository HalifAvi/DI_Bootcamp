import '../basicElementStyle/AppLogoStyle.css';
import Title from "../basicElements/Title";


const AppLogo = (props) => {

    return(

        <div>
            <Title logoPart={"logo-p1"} titleName={process.env.REACT_APP_LOGO_NAME_P1} pattern={"pattern-diagonal-lines-sm text-pattern"}/>
            <Title logoPart={"logo-p2"} titleName={process.env.REACT_APP_LOGO_NAME_P2} />
            <hr className="deco-line deco-line-1"></hr>
            <hr className="deco-line deco-line-2"></hr>
        </div>
    )
}

export default AppLogo;