import * as appTheme from './action-type'

let defaultState = {
  bgColor: 'blue',
  color: 'yellow'
}
export const theme = (state = defaultState, action) => {
  switch (action.type) {
    case appTheme.BGCOLOR:
      console.log(action.data)
      return { ...state, ...action.data }
    default:
      return state
  }
}