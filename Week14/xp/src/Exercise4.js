import './Exercise4.css'

// Exercise 4 : HTML Tags In React
// In a separate Javascript file, create a new Component called Exercise4 that contains some HTML tags.
const Exercise4 = () => {

    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };

    return(
        <div>
            {
            <div style={{textAlign:'center'}}>
                <h1 style={style_header}>This is a Header</h1>
                <p className='para'>This is a Paragraph</p>
                <a href="#">This is a Link</a>

                <form>
                    <h2 style={{color:'red', background: 'lightblue'}}>This is a Form</h2>
                    <label style={{display:'block', marginBottom: '20px'}}>Enter your name :</label>
                    <input name={"name"} />
                    <input type={"submit"} value={"submit"} />
                </form>

                <h3>Here is an image : </h3>
                <img src={"logo512.png"} alt={"logo"} />

                <h3>This is a list : </h3>
                {
                (['coffe','milk','tea']).map((item, idx) => {

                    return(
                        <li key={idx}> {item} </li>
                    )
                })
                }

            </div>
            }
        </div>
    )
}


export default Exercise4
