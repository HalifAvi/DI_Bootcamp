const UserFavoriteColors = (props) => {

    console.log(props)
    return(

        // In the UserFavoriteColors component, use the map function to create a new array of <li>‘s.
        // Each <li> corresponds to one animal from the fav_animals array.
        // Display the <li>‘s. Tip : You can use the second parameter of the map function as a key to
        // uniquely identify each HTML item
        <div>
            {
                (props.array).map((item, idx) => {

                    return(
                        <li key={idx}> {item} </li>
                    )
                })
            }
        </div>
    )
}

export default UserFavoriteColors