import React, {useEffect, useState} from 'react';
import axios from 'axios';

const UploadFile = (props) => {

    const [imgValue, setImgValue] = useState('');
    const [fileData, setFileData] = useState({});

    const uploadImage = async () => {

        const formData = new FormData();
        formData.append('file', imgValue);

        try{

            const data = await axios.post(process.env.REACT_APP_BASE_URL + "/api/upload",
            
            formData
            
            );

            // if i'll write 'data.data' i'll have the file name
            console.log(data);

        }
        catch(e){

            console.log(e);
        }
    }

    return(

        <div>
            <input 
                type='file' 
                name='file' 
                accept='.jpg,.png'
                onChange={(e)=> setImgValue(e.target.files[0])} />
            <button onClick={uploadImage}>Submit</button>
        </div>
    )
}

export default UploadFile;