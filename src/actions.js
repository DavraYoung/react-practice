import {FILTER_TEXT_CHANGED} from './constants'



const filterTextChanged=(input)=>{
  return {
    type:  FILTER_TEXT_CHANGED,
    payload: input
  }
}
export {
  filterTextChanged
}
