import {
  ADD,
  MINUS
} from '../constants/counter'

export const add = () => {
  return {
    type: ADD,
    num: 10
  }
}
export const minus = () => {
  return {
    type: MINUS
  }
}

// 异步的action
export function asyncAdd() {
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
