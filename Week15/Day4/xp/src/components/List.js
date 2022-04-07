import './Style.css';

const List = (props) => {

    return(
        <>
            {   
                (props.arr).map(item => {

                    let toDisplay = props.property !== "" ? item[props.property] : item;

                    return(
                        <>
                            <li className={'liStyle'}>{toDisplay}</li>
                        </>
                    )
                })
            }     
        </>
    )
}

export default List;