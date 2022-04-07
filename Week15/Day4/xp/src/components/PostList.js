import data from '../data.json'

const PostList = () => {

    return(

        <div style={{textAlign : "center", marginTop : "30px"}}>
            {   
                data.map(item => {

                    return(
                        <>
                            <h1>{item.title}</h1>
                            <br/>
                            <h6>{item.content}</h6>
                        </>
                    )
                })
            }        
        </div>
    )
}

export default PostList;