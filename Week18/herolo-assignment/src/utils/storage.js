export const addToLoacalStorage = (key,value) => {

  window.localStorage.setItem(key, JSON.stringify(value));
}

export const getFromLocalStorage = (key) => {

  // "||" FOR INIT !!!
  return JSON.parse(window.localStorage.getItem(key)) || []
}
