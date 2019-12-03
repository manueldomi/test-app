import { actionTypes } from "../actions/clients";

const initialState = {
  clients: [],
  favourites: [],
  error: false,
  errorMessage: ""
};

const clientsReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case "CLEAN_ERRORS":
      return { ...state, error: false, errorMessage: "" };
    case actionTypes.LIST_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: action.clients
      };
    case actionTypes.GET_FAVOURITES_SUCCESS:
      return {
        ...state,
        favourites: action.favourites
      };
    case actionTypes.ADD_CLIENT_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.error
      };
    default:
      return state;
  }
};

export default clientsReducer;
