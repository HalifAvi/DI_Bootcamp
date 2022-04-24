const initsState = {
  fname:'',
  sname:'',
  results: {}
}



export const snameRed = (state=initsState, action={}) => {
  switch (action.type) {
    
    case 'SET_SNAME':
      return {...state, sname:action.payload}

    default:
      return {...state}
  }
}


export const fnameRed = (state=initsState, action={}) => {
  switch (action.type) {

    case 'SET_FNAME':
      return {...state, fname:action.payload}

    default:
      return {...state}
  }
}


export const resRed = (state=initsState, action={}) => {
  switch (action.type) {
   
    case 'RESULT':
      return {...state, results:action.payload}
    default:
      return {...state}
  }
}
