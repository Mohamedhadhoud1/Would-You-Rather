export const SET_LOADING = 'SET_LOADING'

export function loadingStatus (status) {
  return {
    type: SET_LOADING,
    status,
  }
}