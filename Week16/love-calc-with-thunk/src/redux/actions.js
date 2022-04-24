

export const setNames = (value1,value2) => {
  return{
    type:value1,
    payload:value2
  }
}


export const setResults = () => (dispatch, getState) => {

  console.log(getState())

  const {fname} = getState().fnameRed;
  const {sname} = getState().snameRed;


  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": "8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c"
    }
  })
  .then(response => {
    return response.json();
  })
  .then(data => {
    
    dispatch({

      type:'RESULT',
      payload: data

    })
  })
  .catch(err => {
    console.error(err);
  });
}
