import { useContext } from "react";
import { AppContext } from "../App";

const SearchBox = () => {

  const {handleChange} = useContext(AppContext);

    return(
      <>
        <input type="text" onChange={handleChange}/>
      </>
    )
}

export default SearchBox;
