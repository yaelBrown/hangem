import initialstate from "./initialstate";

const state = initialstate


const reducer = (state, action) => {
  switch(action.type) {
    case "DASHBOARD_PAGE_CHANGE":
      state.dashboard.currentPage = action.payload
      return state
    default: 
      return state
  }
}

export default reducer