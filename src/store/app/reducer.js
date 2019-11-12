import * as appTheme from './action-type'

let defaultState = {
  bgColor: 'blue',
  color: 'yellow'
}
export const theme = (state = defaultState, action) => {
  switch (action.type) {
    case appTheme.BGCOLOR:
      return { ...state, ...action.data }
    default:
      return state
  }
}