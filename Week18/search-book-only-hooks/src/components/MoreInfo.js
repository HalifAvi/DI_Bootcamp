import { useParams } from "react-router-dom";

const MoreInfo = () => {

    const id = useParams();

    return(

        <div>

        {console.log(id)}


        </div>
    )
}

export default MoreInfo;