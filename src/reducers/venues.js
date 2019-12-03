import { actionTypes } from "../actions/venues";

const initialState = {
  venue: null,
  venues: [],
  error: false,
  errrorMessage: ""
};

const venuesReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_VENUE_SUCCESS:
      return {
        ...state,
        venue: action.venue
      };
    case actionTypes.LIST_VENUES_SUCCESS:
      return {
        ...state,
        venues: action.venues
      };
    case actionTypes.ADD_VENUE_FAILURE:
      return {
        ...state,
        errorMessage: action.error,
        error: true
      };
    case "CLEAN_ERRORS":
      return {
        ...state,
        error: false,
        errorMessage: ""
      };
    default:
      return state;
  }
};

export default venuesReducer;
