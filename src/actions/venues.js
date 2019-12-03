import VenuesController from "../controllers/VenuesController";

export const actionTypes = {
  ADD_VENUE: "ADD_VENUE",
  ADD_VENUE_REQUEST: "ADD_VENUE_REQUEST",
  ADD_VENUE_FAILURE: "ADD_VENUE_FAILURE",
  ADD_VENUE_SUCCESS: "ADD_VENUE_SUCCESS",

  LIST_VENUES: "LIST_VENUES",
  LIST_VENUES_REQUEST: "LIST_VENUES_REQUEST",
  LIST_VENUES_FAILURE: "LIST_VENUES_FAILURE",
  LIST_VENUES_SUCCESS: "LIST_VENUES_SUCCESS"
};

const addVenueRequest = () => ({
  type: actionTypes.ADD_VENUE_REQUEST
});

const addVenueSuccess = (venue) => ({
  type: actionTypes.ADD_VENUE_SUCCESS,
  venue
});

const addVenueError = (error) => ({
  type: actionTypes.ADD_VENUE_FAILURE,
  error
});

const listVenuesRequest = () => ({
  type: actionTypes.LIST_VENUES_REQUEST
});

const listVenuesSuccess = (venues) => ({
  type: actionTypes.LIST_VENUES_SUCCESS,
  venues
});

const listVenuesError = (error) => ({
  type: actionTypes.LIST_VENUES_FAILURE,
  error
});

export const addVenue = (name, callback) => async (dispatch) => {
  dispatch(addVenueRequest());
  try {
    const venue = await VenuesController.addVenue(name);
    dispatch(addVenueSuccess(venue));
    callback && callback();
  } catch (error) {
    dispatch(addVenueError(error.message));
  }
};

export const listVenues = () => async (dispatch) => {
  dispatch(listVenuesRequest());
  try {
    const venues = await VenuesController.listVenues();

    dispatch(listVenuesSuccess(venues));
  } catch (error) {
    dispatch(listVenuesError(error.message));
  }
};
