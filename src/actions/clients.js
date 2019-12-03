import CliensController from "../controllers/ClientsController";

export const actionTypes = {
  LIST_CLIENTS: "LIST_CLIENTS",
  LIST_CLIENTS_REQUEST: "LIST_CLIENTS_REQUEST",
  LIST_CLIENTS_FAILURE: "LIST_CLIENTS_FAILURE",
  LIST_CLIENTS_SUCCESS: "LIST_CLIENTS_SUCCESS",

  ADD_CLIENT: "ADD_CLIENT",
  ADD_CLIENT_REQUEST: "ADD_CLIENT_REQUEST",
  ADD_CLIENT_FAILURE: "ADD_CLIENT_FAILURE",
  ADD_CLIENT_SUCCESS: "ADD_CLIENT_SUCCESS",

  GET_FAVOURITES: "GET_FAVOURITES",
  GET_FAVOURITES_REQUEST: "GET_FAVOURITES_REQUEST",
  GET_FAVOURITES_FAILURE: "GET_FAVOURITES_FAILURE",
  GET_FAVOURITES_SUCCESS: "GET_FAVOURITES_SUCCESS",

  ADD_FAVOURITE: "ADD_FAVOURITE",
  ADD_FAVOURITE_REQUEST: "ADD_FAVOURITE_REQUEST",
  ADD_FAVOURITE_FAILURE: "ADD_FAVOURITE_FAILURE",
  ADD_FAVOURITE_SUCCESS: "ADD_FAVOURITE_SUCCESS",

  REMOVE_FAVOURITE: "REMOVE_FAVOURITE",
  REMOVE_FAVOURITE_REQUEST: "REMOVE_FAVOURITE_REQUEST",
  REMOVE_FAVOURITE_FAILURE: "REMOVE_FAVOURITE_FAILURE",
  REMOVE_FAVOURITE_SUCCESS: "REMOVE_FAVOURITE_SUCCESS"
};

const listClientsRequest = () => ({
  type: actionTypes.LIST_CLIENTS_REQUEST
});

const listClientsSuccess = (clients) => ({
  type: actionTypes.LIST_CLIENTS_SUCCESS,
  clients
});

const listClientsError = (error) => ({
  type: actionTypes.LIST_CLIENTS_FAILURE,
  error
});

const addClientRequest = () => ({
  type: actionTypes.ADD_CLIENT_REQUEST
});

const addClientSuccess = (client) => ({
  type: actionTypes.ADD_CLIENT_SUCCESS,
  client
});

const addClientError = (error) => ({
  type: actionTypes.ADD_CLIENT_FAILURE,
  error
});

const getFavouritesRequest = () => ({
  type: actionTypes.GET_FAVOURITES_REQUEST
});

const getFavouritesSuccess = (favourites) => ({
  type: actionTypes.GET_FAVOURITES_SUCCESS,
  favourites
});

const getFavouritesError = (error) => ({
  type: actionTypes.GET_FAVOURITES_FAILURE,
  error
});

const addFavouriteRequest = () => ({
  type: actionTypes.ADD_FAVOURITE_REQUEST
});

const addFavouriteSuccess = (favourite) => ({
  type: actionTypes.ADD_FAVOURITE_SUCCESS,
  favourite
});

const addFavouriteError = (error) => ({
  type: actionTypes.ADD_FAVOURITE_FAILURE,
  error
});

const removeFavouriteRequest = () => ({
  type: actionTypes.REMOVE_FAVOURITE_REQUEST
});

const removeFavouriteSuccess = (favourite) => ({
  type: actionTypes.REMOVE_FAVOURITE_SUCCESS,
  favourite
});

const removeFavouriteError = (error) => ({
  type: actionTypes.REMOVE_FAVOURITE_FAILURE,
  error
});
export const listClients = () => async (dispatch) => {
  dispatch(listClientsRequest());
  try {
    const clients = await CliensController.listClients();

    dispatch(listClientsSuccess(clients));
  } catch (error) {
    dispatch(listClientsError(error.message));
  }
};

export const addClient = (body, callback) => async (dispatch) => {
  dispatch(addClientRequest());
  try {
    const client = await CliensController.addClient(body);

    dispatch(addClientSuccess(client));
    callback && callback();
  } catch (error) {
    const err = error;
    debugger;
    dispatch(addClientError(error.message));
  }
};

export const getFavourites = (id, callback) => async (dispatch) => {
  dispatch(getFavouritesRequest());
  try {
    const favourites = await CliensController.getFavourites(id);
    debugger;
    dispatch(getFavouritesSuccess(favourites));
    callback && callback();
  } catch (error) {
    debugger;
    dispatch(getFavouritesError(error.message));
  }
};

export const addFavourite = (clientId, venueId, callback) => async (
  dispatch
) => {
  dispatch(addFavouriteRequest());
  try {
    const favourite = await CliensController.addFavourite(clientId, venueId);
    debugger;
    dispatch(addFavouriteSuccess(favourite));
    callback && callback();
  } catch (error) {
    debugger;
    dispatch(addFavouriteError(error.message));
  }
};

export const removeFavourite = (clientId, venueId, callback) => async (
  dispatch
) => {
  dispatch(removeFavouriteRequest());
  try {
    const favourite = await CliensController.removeFavourite(clientId, venueId);
    debugger;
    dispatch(removeFavouriteSuccess(favourite));
    callback && callback();
  } catch (error) {
    debugger;
    dispatch(removeFavouriteError(error.message));
  }
};
